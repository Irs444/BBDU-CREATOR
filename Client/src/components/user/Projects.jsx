import React, { useEffect, useState } from 'react'
import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
} from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'

const sortOptions = [
    { name: 'Most Popular', href: '#', current: true },
    { name: 'Best Rating', href: '#', current: false },
    { name: 'Newest', href: '#', current: false },
    { name: 'Price: Low to High', href: '#', current: false },
    { name: 'Price: High to Low', href: '#', current: false },
]

const filters = [
    {
        id: 'departments',
        name: 'Departments',
        options: [
            { value: 'Web Development', label: 'Web Development', checked: false },
            { value: 'Data Science', label: 'Data Science', checked: false },
            { value: 'AI', label: 'AI', checked: true },
            { value: 'Data Analytics', label: 'Data Analytics', checked: false },

        ],
    },


]
const filter1 = [

    {
        id: 'years',
        name: 'Years',
        options: [
            { value: '2023-24', label: '2023-24', checked: false },
            { value: '2022-23', label: '2022-23', checked: false },
            { value: '2021-22', label: '2021-22', checked: true },
            { value: '2020-21', label: '2020-21', checked: false },

        ],
    },

]


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Projects = () => {
    const [projectList, setProjectList] = useState([]);

    const [currentPage, setCurrentPage] = useState(1)
    const recordsPerPage = 5;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = projectList.slice(firstIndex, lastIndex);
    const npage = Math.ceil(projectList.length / recordsPerPage);
    const numbers = [...Array(npage + 1).keys()].slice(1)

    function prePage() {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    function changePage(id) {
        setCurrentPage(id)
    }

    function nextPage() {
        if (currentPage !== npage) {
            setCurrentPage(currentPage + 1)
        }
    }



    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
    const [masterList, setMasterList] = useState([]);

    const fetchProjectList = async () => {
        const res = await fetch("http://localhost:5000/projects/getall");
        console.log(res.status);

        const data = await res.json();
        console.log(data);
        setProjectList(data.filter(project => project.verified));
        setMasterList(data.filter(project => project.verified));
    }

    useEffect(() => {
        fetchProjectList();
    }, [])

    const applySearch = (e) => {
        const inputText = e.target.value;

        setProjectList(masterList.filter((project) => {
            return project.title.toLowerCase().includes(inputText.toLowerCase());


        }));
    }

    const filterByDepartment = (department) => {

        const filteredProjects = masterList.filter(project => project.department === department);
        setProjectList(filteredProjects);

    }


    const filterByYear = (year) => {
        const filteredProjects = masterList.filter(project => project.year === year);
        setProjectList(filteredProjects);
    }

    return (
        <div>
            <div className="container ">
                <div className="row mt-3 mx-5">
                    <form
                        className="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto w-full "
                        role="search"
                    >
                        <input onChange={applySearch}
                            type="search"
                            className="form-control rounded w-100"
                            placeholder="Search..."
                            aria-label="Search"
                        />
                    </form>
                </div>
                {/* <div className="row mx-2 ">
                    <h1 className='py-4' style={{ fontFamily: "initial", fontSize: "2rem", fontWeight: "bold" }}>Filter</h1>
                    <div className=" dropdown col-md-2">
                        <h1 className="dropdowm-toggle py-2" data-bs-toggle="dropdown" aria-expanded="false" style={{ fontFamily: "initial", fontWeight: "bold", fontSize: "20px" }} >Departments</h1>
                        <ul className='dropdowm-menu d-block' style={{ fontFamily: "initial", fontWeight: "bold" }}>
                            <li>
                                <div class="form-check">
                                    <input className="form-check-input" type="radio" name='course' value="html" id="bca"
                                     onChange={(e) => filterByDepartment('Web Development')} />
                                    <label href="" for="bca" className="dropdowm-item">Web Development</label>
                                </div>

                            </li>
                            <li>
                                <div class="form-check">
                                    <input className="form-check-input" type="radio" name='course' value="css" id="mca"
                                     onChange={(e) => filterByDepartment('Data Science')} />
                                    <label href="" for="mca" className="dropdowm-item">Data Science</label>
                                </div>

                            </li>
                            <li>
                                <div class="form-check">
                                    <input className="form-check-input" type="radio" name='course' value="java" id="it" 
                                     onChange={(e) => filterByDepartment('AI')}/>
                                    <label href="" for="it" className="dropdowm-item">AI</label>
                                </div>

                            </li>
                            <li>
                                <div class="form-check">
                                    <input className="form-check-input" type="radio" name='course' value="ai" id="ai" 
                                     onChange={(e) => filterByDepartment('Data Analytics')}/>
                                    <label href="" for="ai" className="dropdowm-item">Data Analytics</label>
                                </div>

                            </li>
                        </ul>
                        <h1 className="dropdowm-toggle pt-4" data-bs-toggle="dropdown" aria-expanded="false" style={{ fontFamily: "initial", fontWeight: "bold", fontSize: "20px" }} >Years</h1>
                        <ul className='dropdowm-menu d-block' style={{ fontFamily: "initial", fontWeight: "bold" }}>
                            <li>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name='year' value="" id="flexCheckDefault"
                                     onChange={(e) => filterByYear('2023-24')}/> 
                                    <label href="" className="dropdowm-item">2023-24</label>
                                </div>

                            </li>
                            <li>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name='year' value="" id="flexCheckDefault"
                                    onChange={(e) => filterByYear('2022-23')} />
                                    <label href="" className="dropdowm-item">2022-23</label>
                                </div>

                            </li>
                            <li>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name='year' value="" id="flexCheckDefault"
                                    onChange={(e) => filterByYear('2021-22')} />
                                    <label href="" className="dropdowm-item">2021-22</label>
                                </div>

                            </li>
                            <li>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name='year' value="" id="flexCheckDefault"
                                    onChange={(e) => filterByYear('2020-21')} />
                                    <label href="" className="dropdowm-item">2020-21</label>
                                </div>

                            </li>
                           
                        </ul>
                    </div>
                    <div className="col-md-10">
                        <div className="row">
                            {
                                projectList.map((pro) => {
                                    return (
                                        <div className="col col-md-4 g-3 ">
                                            <div className="card shadow">
                                                <img src={"http://localhost:5000/" + pro.image} alt="" className='card-img-top' style={{ height: 200 }} />
                                                <div className="card-body">
                                                    <h1 className='text-center fw-bold' style={{ fontFamily: "initial" }}>{pro.title}</h1>
                                                    <p className='text-center'>{pro.description}</p>
                                                    <p className='text-center'>{pro.department}</p>
                                                    <p className='text-center'>{pro.year}</p>
                                                    <Link to={"/user/detail/" + pro._id} type='button' className="btn btn-success text-white fs-5" style={{ fontFamily: "initial" }}>View</Link>

                                                </div>
                                            </div>

                                        </div>
                                    )
                                })
                            }

                          
                        </div>
                    </div>
                </div> */}
                <div className="bg-white">
                    <div>
                        {/* Mobile filter dialog */}
                        <Dialog open={mobileFiltersOpen} onClose={setMobileFiltersOpen} className="relative z-40 lg:hidden">
                            <DialogBackdrop
                                transition
                                className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
                            />

                            <div className="fixed inset-0 z-40 flex">
                                <DialogPanel
                                    transition
                                    className="relative ml-auto flex h-full w-full max-w-xs transform flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:translate-x-full"
                                >
                                    <div className="flex items-center justify-between px-4">
                                        <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                                        <button
                                            type="button"
                                            onClick={() => setMobileFiltersOpen(false)}
                                            className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                                        >
                                            <span className="sr-only">Close menu</span>
                                            <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                                        </button>
                                    </div>

                                    {/* Filters */}
                                    <form className="mt-4 border-t border-gray-200">


                                        {filters.map((section) => (
                                            <Disclosure key={section.id} as="div" className="border-t border-gray-500 px-4 py-6">
                                                <h3 className="-mx-2 -my-3 flow-root">
                                                    <DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                                        <span className="font-medium text-gray-900">{section.name}</span>
                                                        <span className="ml-6 flex items-center">
                                                            <PlusIcon aria-hidden="true" className="h-5 w-5 group-data-[open]:hidden" />
                                                            <MinusIcon aria-hidden="true" className="h-5 w-5 [.group:not([data-open])_&]:hidden" />
                                                        </span>
                                                    </DisclosureButton>
                                                </h3>
                                                <DisclosurePanel className="pt-6">
                                                    <div className="space-y-6">
                                                        {section.options.map((option, optionIdx) => (
                                                            <div key={option.value} className="flex items-center">
                                                                <input
                                                                    defaultValue={option.value}
                                                                    // defaultChecked={option.checked}
                                                                    id={`filter-mobile-${section.id}-${optionIdx}`}
                                                                    name={`${section.id}[]`}
                                                                    type="checkbox"
                                                                    onClick={() => filterByDepartment(option.value)}
                                                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                                />
                                                                <label
                                                                    htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                                                    className="ml-3 min-w-0 flex-1 text-gray-500"
                                                                >
                                                                    {option.label}
                                                                </label>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </DisclosurePanel>
                                            </Disclosure>
                                        ))}
                                        {filter1.map((section) => (
                                            <Disclosure key={section.id} as="div" className="border-t border-gray-500 px-4 py-6">
                                                <h3 className="-mx-2 -my-3 flow-root">
                                                    <DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                                        <span className="font-medium text-gray-900">{section.name}</span>
                                                        <span className="ml-6 flex items-center">
                                                            <PlusIcon aria-hidden="true" className="h-5 w-5 group-data-[open]:hidden" />
                                                            <MinusIcon aria-hidden="true" className="h-5 w-5 [.group:not([data-open])_&]:hidden" />
                                                        </span>
                                                    </DisclosureButton>
                                                </h3>
                                                <DisclosurePanel className="pt-6">
                                                    <div className="space-y-6">
                                                        {section.options.map((option, optionIdx) => (
                                                            <div key={option.value} className="flex items-center">
                                                                <input
                                                                    defaultValue={option.value}
                                                                    // defaultChecked={option.checked}
                                                                    id={`filter-mobile-${section.id}-${optionIdx}`}
                                                                    name={`${section.id}[]`}
                                                                    type="checkbox"
                                                                    onClick={() => filterByYear(option.value)}
                                                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                                />
                                                                <label
                                                                    htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                                                    className="ml-3 min-w-0 flex-1 text-gray-500"
                                                                >
                                                                    {option.label}
                                                                </label>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </DisclosurePanel>
                                            </Disclosure>
                                        ))}

                                    </form>
                                </DialogPanel>
                            </div>
                        </Dialog>

                        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <div className="flex items-baseline justify-between border-b border-gray-500 pb-6 pt-24">
                                <h1 className="text-4xl font-bold tracking-tight text-gray-900">All Projetcs</h1>

                                <div className="flex items-center">
                                    <Menu as="div" className="relative inline-block text-left">
                                        <div>
                                            <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                                                Sort
                                                <ChevronDownIcon
                                                    aria-hidden="true"
                                                    className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                                />
                                            </MenuButton>
                                        </div>

                                        <MenuItems
                                            transition
                                            className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                                        >
                                            <div className="py-1">
                                                {sortOptions.map((option) => (
                                                    <MenuItem key={option.name}>
                                                        <a
                                                            href={option.href}
                                                            className={classNames(
                                                                option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                                                                'block px-4 py-2 text-sm data-[focus]:bg-gray-100',
                                                            )}
                                                        >
                                                            {option.name}
                                                        </a>
                                                    </MenuItem>
                                                ))}
                                            </div>
                                        </MenuItems>
                                    </Menu>

                                    <button type="button" className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
                                        <span className="sr-only">View grid</span>
                                        <Squares2X2Icon aria-hidden="true" className="h-5 w-5" />
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setMobileFiltersOpen(true)}
                                        className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                                    >
                                        <span className="sr-only">Filters</span>
                                        <FunnelIcon aria-hidden="true" className="h-5 w-5" />
                                    </button>
                                </div>
                            </div>

                            <section aria-labelledby="products-heading" className="pb-24 pt-6">
                                <h2 id="products-heading" className="sr-only">
                                    Products
                                </h2>

                                <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                                    {/* Filters */}
                                    <form className="hidden lg:block">


                                        {filters.map((section) => (
                                            <Disclosure key={section.id} as="div" className="border-b border-gray-500 py-6">
                                                <h3 className="-my-3 flow-root">
                                                    <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                                                        <span className="font-medium text-gray-900">{section.name}</span>
                                                        <span className="ml-6 flex items-center">
                                                            <PlusIcon aria-hidden="true" className="h-5 w-5 group-data-[open]:hidden" />
                                                            <MinusIcon aria-hidden="true" className="h-5 w-5 [.group:not([data-open])_&]:hidden" />
                                                        </span>
                                                    </DisclosureButton>
                                                </h3>
                                                <DisclosurePanel className="pt-6">
                                                    <div className="space-y-4">
                                                        {section.options.map((option, optionIdx) => (
                                                            <div key={option.value} className="flex items-center">
                                                                <input
                                                                    defaultValue={option.value}
                                                                    // defaultChecked={option.checked}
                                                                    id={`filter-${section.id}-${optionIdx}`}
                                                                    name={`${section.id}[]`}
                                                                    type="checkbox"
                                                                    onClick={() => filterByDepartment(option.value)}

                                                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                                />
                                                                <label htmlFor={`filter-${section.id}-${optionIdx}`} className="ml-3 text-sm text-gray-600">
                                                                    {option.label}
                                                                </label>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </DisclosurePanel>
                                            </Disclosure>
                                        ))}
                                        {filter1.map((section) => (
                                            <Disclosure key={section.id} as="div" className="border-b border-gray-500 py-6">
                                                <h3 className="-my-3 flow-root">
                                                    <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                                                        <span className="font-medium text-gray-900">{section.name}</span>
                                                        <span className="ml-6 flex items-center">
                                                            <PlusIcon aria-hidden="true" className="h-5 w-5 group-data-[open]:hidden" />
                                                            <MinusIcon aria-hidden="true" className="h-5 w-5 [.group:not([data-open])_&]:hidden" />
                                                        </span>
                                                    </DisclosureButton>
                                                </h3>
                                                <DisclosurePanel className="pt-6">
                                                    <div className="space-y-4">
                                                        {section.options.map((option, optionIdx) => (
                                                            <div key={option.value} className="flex items-center">
                                                                <input
                                                                    defaultValue={option.value}
                                                                    // defaultChecked={option.checked}
                                                                    id={`filter-${section.id}-${optionIdx}`}
                                                                    name={`${section.id}[]`}
                                                                    type="checkbox"
                                                                    onClick={() => filterByYear(option.value)}

                                                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                                />
                                                                <label htmlFor={`filter-${section.id}-${optionIdx}`} className="ml-3 text-sm text-gray-600">
                                                                    {option.label}
                                                                </label>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </DisclosurePanel>
                                            </Disclosure>
                                        ))}
                                    </form>


                                    {/* Product grid */}
                                    <div className="lg:col-span-3">
                                        {/* product list start */}

                                        <div className="bg-white">
                                            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                                                <div className=" grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 ">
                                                    {records.map((project) => (
                                                        <div key={project.id} className="group relative border-1 border-gray-500 shadow-lg rounded ">
                                                            <div className="  aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md  lg:aspect-none group-hover:opacity-75 lg:h-80">
                                                                <img

                                                                    src={"http://localhost:5000/" + project.image}
                                                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full "
                                                                />
                                                            </div>
                                                            <div className="mt-4 flex justify-between px-3">
                                                                <div>
                                                                    <h3 className="text-sm font-medium text-gray-900">
                                                                        <a href={project.href}>
                                                                            <span aria-hidden="true" className="absolute inset-0 " />
                                                                            {project.title}
                                                                        </a>
                                                                    </h3>
                                                                    <p className="mt-1 text-sm text-gray-500">{project.year}</p>
                                                                </div>
                                                                <p className="text-sm font-medium text-gray-900">{project.department}</p>
                                                            </div>
                                                            <div className='p-3'>
                                                                <Link type='button' to={`/user/detail/ ${project._id}`} className=" w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center">
                                                                    View Project
                                                                </Link>
                                                            </div>
                                                        </div>

                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        {/* product list ens */}
                                    </div>
                                </div>
                            </section>
                        </main>
                    </div>
                </div>
                <Pagination  numbers={numbers} currentPage={currentPage} prePage={prePage} nextPage={nextPage} changePage={changePage} recordsPerPage={recordsPerPage}  />
            </div>
        </div>
    )
}

export default Projects

const Pagination = ({ numbers, currentPage, prePage, nextPage, changePage, totalItem = 17 , recordsPerPage }) => {
    return (
        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
            <div className="flex flex-1 justify-between sm:hidden">
                <a
                    href="#"
                    className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                    Previous
                </a>
                <a
                    href="#"
                    className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                    Next
                </a>
            </div>
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm text-gray-700">
                        Showing <span className="font-medium">{(currentPage -1) * recordsPerPage +1}</span> to <span className="font-medium">{currentPage * recordsPerPage}</span> of{' '}
                        <span className="font-medium">{totalItem}</span> results
                    </p>
                </div>
                <div>
                    <nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md shadow-sm">
                        <a

                            
                            className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                        >
                            <span className="sr-only">Previous</span>
                            <ChevronLeftIcon aria-hidden="true" className="h-5 w-5 cursor-pointer" onClick={prePage} />
                        </a>
                        {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
                        {
                            numbers.map((n, i) => (

                                <a
                                    onClick={() => changePage(n)}
                                    key={i}
                                    aria-current="page"
                                    className={` ${currentPage === n ? ' bg-indigo-600 text-white' : 'text-gray-500 border'} cursor-pointer relative z-10 inline-flex items-center px-4 py-2 text-sm font-semibold  focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
                                >
                                    {n}
                                </a>
                            ))
                        }



                        <a

                            
                            className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                        >
                            <span className="sr-only">Next</span>
                            <ChevronRightIcon aria-hidden="true" className="h-5 w-5 cursor-pointer" onClick={nextPage} />
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    )
}