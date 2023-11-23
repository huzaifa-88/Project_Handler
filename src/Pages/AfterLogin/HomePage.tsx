import React, { useState, useEffect } from 'react';
import homeLogo from '../Assets/trello-home-removebg.png';
import { Link } from 'react-router-dom';
import DialogBox from './dialog.tsx';


const HomePage = () => {


    const [showDropdown1, setShowDropdown1] = useState(false);
    const [showDropdown2, setShowDropdown2] = useState(false);
    const [showDropdown3, setShowDropdown3] = useState(false);
    const [showDropdown4, setShowDropdown4] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [workspaces, setWorkspaces] = useState(['Workspace 1']);
    const [showCreateDropdown, setShowCreateDropdown] = useState(false);

    const toggleCreateDropdown = () => {
        setShowCreateDropdown(!showCreateDropdown);
    };
    // const [isDialogOpen, setIsDialogOpen] = useState(false);
    // const [showDialog, setShowDialog] = useState(false);

    // const openDialog = () => {
    //     setShowDialog(true);
    // };

    // const closeDialog = () => {
    //     setShowDialog(false);
    // };

    const closeDropdowns = () => {
        setShowDropdown1(false);
        setShowDropdown2(false);
        setShowDropdown3(false);
        setShowDropdown4(false);
    };

    const toggleDropdown = (dropdown) => {
        setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
    };

    const toggleDropdown1 = () => {
        closeDropdowns();
        setShowDropdown1(!showDropdown1);
    }

    const toggleDropdown2 = () => {
        closeDropdowns();
        setShowDropdown2(!showDropdown2);
    }

    const toggleDropdown3 = () => {
        closeDropdowns();
        setShowDropdown3(!showDropdown3);
    }

    const toggleDropdown4 = () => {
        closeDropdowns();
        setShowDropdown4(!showDropdown4);
    }

    useEffect(() => {
        const savedWorkspaces = JSON.parse(localStorage.getItem('workspaces') ?? '[]');
        if (savedWorkspaces) {
            setWorkspaces(savedWorkspaces);
        }
    }, []);

    const addWorkspace = () => {
        const workspaceName = prompt('Enter workspace name:');
        if (workspaceName) {
            const updatedWorkspaces = [...workspaces, workspaceName];
            setWorkspaces(updatedWorkspaces);
            // Save updated workspaces to localStorage
            localStorage.setItem('workspaces', JSON.stringify(updatedWorkspaces));
        }
    };

    const deleteWorkspace = (index) => {
        const updatedWorkspaces = [...workspaces];
        updatedWorkspaces.splice(index, 1);
        setWorkspaces(updatedWorkspaces);
        // Update localStorage after deletion
        localStorage.setItem('workspaces', JSON.stringify(updatedWorkspaces));
    };

    const WorkspaceIcon = () => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 mr-2 mt-1"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
            <path d="M8 2L12 6 16 2" />
        </svg>
    );

    const DeleteIcon = () => (
        <svg 
            className='ml-2'
            width="20px" 
            height="24px" 
            viewBox="0 0 24 24" 
            color='yellow'
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            stroke='white'
            stroke-width="1.5">
            <path d="M20 9L18.005 20.3463C17.8369 21.3026 17.0062 22 16.0353 22H7.96474C6.99379 22 6.1631 21.3026 5.99496 20.3463L4 9" fill="#000000"></path>
            <path 
                d="M20 9L18.005 20.3463C17.8369 21.3026 17.0062 22 16.0353 22H7.96474C6.99379 22 6.1631 21.3026 5.99496 20.3463L4 9H20Z" 
                stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            </path>
            <path 
                d="M21 6H15.375M3 6H8.625M8.625 6V4C8.625 2.89543 9.52043 2 10.625 2H13.375C14.4796 2 15.375 2.89543 15.375 4V6M8.625 6H15.375" 
                stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            </path>
        </svg>
    );

    
    // const handleAddWorkspace = (workspaceName) => {
    //     if (workspaceName) {
    //         const updatedWorkspaces = [...workspaces, workspaceName];
    //         setWorkspaces(updatedWorkspaces);
    //         localStorage.setItem('workspaces', JSON.stringify(updatedWorkspaces));
    //     }
    // };

    return (
        <div>
            <nav className="bg-gray-800 text-gray-400 font-semibold p-3 flex justify-between items-center">
                <div className="flex items-center space-x-4">
                    <div className="text-xl mb-2 font-bold flex">
                        <img src={homeLogo} alt="Home Logo" className='h-8' />
                        <h1 className='ml-2'>Project Manager</h1>
                    </div>
                    <ul className="flex ml-8 space-x-8">
                    <li className="relative">
                        <button onClick={toggleDropdown1} className="focus:outline-none">
                        Home &#9662;
                        </button>
                        {showDropdown1 && (
                        <div className="absolute top-full left-0 bg-black py-2 px-4 mt-2">
                            <a href="/" className="block py-2">Home 1</a>
                            <a href="/" className="block py-2">Home 2</a>
                            <a href="/" className="block py-2">Home 3</a>
                        </div>
                        )}
                    </li>
                    <li className="relative">
                        <button onClick={toggleDropdown2} className="focus:outline-none">
                        About &#9662;
                        </button>
                        {showDropdown2 && (
                        <div className="absolute top-full left-0 bg-black py-2 px-4 mt-2">
                            <a href="/" className="block py-2">About 1</a>
                            <a href="/" className="block py-2">About 2</a>
                            <a href="/" className="block py-2">About 3</a>
                        </div>
                        )}
                    </li>
                    <li className="relative">
                        <button onClick={toggleDropdown3} className="focus:outline-none">
                        Services &#9662;
                        </button>
                        {showDropdown3 && (
                        <div className="absolute top-full left-0 bg-black py-2 px-4 mt-2">
                            <a href="/" className="block py-2">Services 1</a>
                            <a href="/" className="block py-2">Services 2</a>
                            <a href="/" className="block py-2">Services 3</a>
                        </div>
                        )}
                    </li>
                    <li className="relative">
                        <button onClick={toggleDropdown4} className="focus:outline-none">
                        Contact &#9662;
                        </button>
                        {showDropdown4 && (
                        <div className="absolute top-full left-0 bg-black py-2 px-4 mt-2">
                            <a href="/" className="block py-2">Contact 1</a>
                            <a href="/" className="block py-2">Contact 2</a>
                            <a href="/" className="block py-2">Contact 3</a>
                        </div>
                        )}
                    </li>
                    </ul>
                    <div className="relative inline-block">
                <button className={"bg-blue-500 text-gray-700 px-3 py-1 rounded focus:outline-none"} onClick={toggleCreateDropdown}>Create</button>
                {showCreateDropdown && (
                        <div className="absolute mt-8 w-40 bg-white rounded-lg shadow-lg z-10">
                            {/* Dropdown items for Create */}
                            <ul className="py-2">
                                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Create Board</li>
                                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Create Template</li>
                                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Create Workspace</li>
                            </ul>
                        </div>
                    )}
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <input type="text" placeholder="Search" className="px-1 py-1 border text-gray-200 text-sm font-sans font-light border-gray-500 rounded bg-transparent focus:outline-none" />
                    <div className="w-6 h-6 bg-red-500 rounded-full"></div>
                    <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                </div>
            </nav>

            <div className="h-0.5 bg-gray-400"></div> {/* div for line after navbar */}

            {/* div for after navbar */}
            <div className="flex h-screen bg-gray-800">

                {/* div for side bar */}
                <div className="bg-gray-900 text-gray-400 w-64 min-h-screen flex justify-center">
                    {/* Sidebar content */}
                    <div className="p-4">
                        <h1 className="text-2xl font-bold">Menu</h1>
                        {/* Home Dropdown */}
                        <div className="mt-4">
                            <button className="flex items-center w-full p-1 hover:bg-gray-500 rounded-md">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                    <path d="M12 2L0 12h4v10h16v-10h4L12 2zm8 18h-3v-6h-4v6H4V9h16l.01 11z" />
                                </svg>
                                <span className="ml-2">Home</span>
                            </button>
                        </div>
                        {/* Boards Dropdown */}
                        <div className="mt-4">
                            <button className="flex items-center w-full p-1 hover:bg-gray-500 rounded-md " onClick={() => toggleDropdown('boards')}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                    <path d="M3 3h5v5H3V3zm0 7h5v5H3v-5zm0 7h5v5H3v-5zm7-14h5v5h-5V3zm0 7h5v5h-5v-5zm0 7h5v5h-5v-5zm7-14h5v5h-5V3zm0 7h5v5h-5v-5zm0 7h5v5h-5v-5z" />
                                </svg>
                                <span className="ml-2">Boards</span>
                            </button>
                            <div className={`ml-6 ${activeDropdown === 'boards' ? 'block' : 'hidden'}`}>
                                <ul>
                                    <li className="py-2">Functionality 1</li>
                                    <li className="py-2">Functionality 2</li>
                                    <li className="py-2">Functionality 3</li>
                                </ul>
                            </div>
                        </div>
                        {/* Templates Dropdown */}
                        <div className="mt-4">
                            <button className={"flex items-center w-full p-1 hover:bg-gray-500 rounded-md "} onClick={() => toggleDropdown('templates')}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <path d="M21 14h-2v-2h2v2zm-4 4H7v-1l5-10 5 10v1zm-9-4h2v-2H8v2zm-2 4H3v-2h2v2zm0-8H3V7h2v2zm14-4h-2v2h2V7zm0 4h-2v2h2v-2zm0 7h-2v2h2v-2z" />
                                </svg>
                                <span className="ml-2">Templates</span>
                            </button>
                            <div className={`ml-6 ${activeDropdown === 'templates' ? 'block' : 'hidden'}`}>
                                <ul>
                                    <li className="py-2">Functionality 1</li>
                                    <li className="py-2">Functionality 2</li>
                                    <li className="py-2">Functionality 3</li>
                                </ul>
                            </div>
                        </div>
                    <hr className="border-gray-300 my-4" /> {/* Separating line */}

                    {/* Div workspace start */}
                    <div className="flex-1">
                        <h2 className="flex text-lg font-semibold mb-2">
                            <WorkspaceIcon/>
                            Workspaces
                        </h2>
                            <div>
                            {
                                workspaces.map((workspace, index) => (
                                <div key={index} className="flex items-center justify-between mb-2">
                                <div className="flex items-center ml-2 font-semibold">
                                    {/* <span className="text-lg font-semibold mr-2">+</span> */}
                                    <h3>{workspace}</h3>
                                </div>
                                <button onClick={() => deleteWorkspace(index)} className="text-red-500 focus:outline-none">
                                    <DeleteIcon/>
                                </button>
                                </div>
                            ))}
                            </div>
                            <button onClick={addWorkspace} className="flex items-center mt-2 text-blue-500 focus:outline-none">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path
                                    fillRule="evenodd"
                                    d="M10 2a1 1 0 011 1v6h6a1 1 0 110 2h-6v6a1 1 0 11-2 0v-6H4a1 1 0 110-2h6V3a1 1 0 011-1z"
                                    clipRule="evenodd"
                                    />
                                </svg>
                                Add Workspace
                            </button>
                        </div>  {/* Div for workspace */}

                    </div> {/* Div for side bar content */}

                </div>
                {/* div for side bar ended */}

                {/* div for home button present in side bar */}
                <div className='flex'>
                    <div className='flex mt-24 ml-44'>
                        <img src="https://images.unsplash.com/photo-1620428268482-cf1851a36764?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2FydG9vbnxlbnwwfHwwfHx8MA%3D%3D" alt="" className='h-48 w-96' />
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium ducimus voluptate incidunt?</p>
                    </div>
                </div>
                {/* div for home button in side bar ended*/}

                {/* Rest of the code remains the same */}
            </div>  {/* div for after bar ended*/}
        </div> /* Main Div ended */
    );
}

export default HomePage