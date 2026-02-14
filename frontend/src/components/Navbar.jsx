import { BookA, BookOpen, LogOut, User } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { getData } from '@/context/userContext'
import axios from 'axios'
import { toast } from 'sonner'

const Navbar = () => {
/*  now when data is fetched it completly showing in hero section (welcome username), but before login we have no data , when login it give data to backend but also
generate access token in local storage , this token is  used by setuser and shows in procted route  and with the help of access token we give authorization in logout header
and when user want to logout then it must be clear its access token before leave.*/ 
    const {user, setUser} = getData()
    const accessToken = localStorage.getItem("accessToken")
    console.log(user);

    const logoutHandler = async()=>{
        try {
            const res = await axios.post(`${import.meta.env.VITE_URL}/user/logout`,{},{
                headers:{
                    Authorization:`Bearer ${accessToken}`
                }
            })
            if(res.data.success){
                setUser(null)
                toast.success(res.data.message)
                localStorage.clear()
            }
        } catch (error) {
            console.log(error);
            
        }
    }
    
    return (

        <nav className='p-2 border-b border-gray-200 bg-transparent'>
            <div className='max-w-7xl mx-auto flex justify-between items-center'>
                {/* logo section  */}
                <div className='flex gap-2 items-center'>
                    <BookOpen className='h-6 w-6 text-green-800' />
                    <h1 className='font-bold text-xl'><span className='text-green-600'>Notes</span>App</h1>
                </div>
                <div className='flex gap-7 items-center'>
                    <ul className='flex gap-7 items-center text-lg font-semibold'>
                        <li>Features</li>
                        <li>Pricing</li>
                        <li>About</li>
                       {/* /* user jab login karegaa then user avatar and some menu dikhegaa --->but  jab tak user login h tab tak navbar m home page a access with logout 
                        rahega and when not login then only show home page with simply navbar showing register login about button on it ---->so with these condition we have 
                        to maintain a state ie... when usen login they generate access token and session token with login data state so here we want whole login data in userContext RouterProvider
                        then from there(with the help of get data we export the data in protcted route) and then fetch access token which then go to navbar section */ }
                        {
                            user ? <DropdownMenu>
                                <DropdownMenuTrigger>
                                    <Avatar>
                                        <AvatarImage src={user?.avatar} />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem><User/>Profile</DropdownMenuItem>
                                    <DropdownMenuItem><BookA/>Notes</DropdownMenuItem>
                                   <DropdownMenuSeparator />
                                    <DropdownMenuItem onClick={logoutHandler} ><LogOut/>Logout</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu> : <Link to={'/login'}><li>Login</li></Link> 
                        
                        }
                        {
                          user ? <></> : <Link to={'/signup'}><li>Register</li></Link>   
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
 }

 export default Navbar
