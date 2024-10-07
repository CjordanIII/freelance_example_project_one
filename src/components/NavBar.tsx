import Account from '@/lib/icons/Account'
import Heart from '@/lib/icons/Heart'
import Search from '@/lib/icons/Search'
import Link from 'next/link'
import { iconssize } from '@/lib/constraints/landingpageicons'
import Cart from '@/lib/icons/Cart'
import Image from 'next/image'
import logo from "/public/assets/Meubel_House_Logos-05.svg"
const Navbar = () => {
  return (
    <nav className='font-poppins flex justify-between items-center m-5'>
        <div className='flex justify-start'>
        <div className='flex gap-5'>
        <Image
      src={logo}
      width={75}
      height={75}
      alt="Picture of the author"
    />
            <h1 className='font-logo font-bold text-5xl '>Furniro</h1>
            
        </div>
        </div>
        <div className='flex justify-between gap-10 text-xl '>
        <Link href={'#'} >
            Home
        </Link>
        <Link href={'#'}>
            Shop
        </Link>
        <Link href={'#'}>
            About
        </Link>
        <Link href={'#'}>
            Contact
        </Link>
        </div>
        <div  className='flex justify-end gap-5'>
           {/* TODO add paths  */}
           <Link href={"#"}><Account iconssize={iconssize}/></Link>
           <Link href={"#"}><Search iconssize={iconssize}/></Link>
           <Link href={"#"}><Heart iconssize={iconssize}/></Link>
           <Link href={"#"}><Cart iconssize={iconssize}/></Link>
            
            
            
            
        </div>
    </nav>
  )
}

export default Navbar