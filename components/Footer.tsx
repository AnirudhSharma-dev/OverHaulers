import Image from 'next/image'
import Links from 'next/link'
import { footerLinks } from '@/constants'

const Footer = () => {
  return (
    <footer className='flex flex-col text-blue-100 mt-5 border-t border-gray-100'>
        <div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>
            <div className='flex flex-col justify-start items-start gap-6'>
                <Image src='/logo.svg' alt='logo' width={118} height={18} className='object-conatin'/>
                <p className='text-base text-gray-700'>
                    Heavy Haulers 2023<br />
                    All rights reserved &copy;
                </p>
            </div>
            <div className='footer__links'>
                {
                    footerLinks.map((Link) => (
                        <div key={Link.title}
                         className='footer__link'>
                            <h3 className='font-bold text-gray-700'>{Link.title}</h3>
                            {Link.links.map((item) => 
                              (
                                <Links 
                                 key={item.title} href={item.url} className='text-gray-500'>
                                     {item.title}
                                </Links>
                              )
                            )}
                        </div>
                    ))
                }
            </div>
            </div>
            <div className='flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10'>
                <p className='text-gray-500'>@2023 Heavy Haulers. All Rights Reserved</p>
                <div className='footer__copyrights-link'>
                    <Links href="/" className='text-gray-500'>
                        Privacy Policy
                    </Links>
                    <Links href="/" className='text-gray-500'>
                       Terms of Use
                    </Links>
                </div>
            </div>
        
    </footer>
  )
}

export default Footer