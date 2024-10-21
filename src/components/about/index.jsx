import React from 'react'
import ItemLayout from './ItemLayout'



const AboutDetails = () => {
  return (
    <section className='py-20 w-full'>
        <div className='grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full'>
            <ItemLayout className={' col-span-full lg:col-span-8 row-span-2 flex-col items-start'}>
                <h2 className='text-xl md:text-2xl lg:text-4xl font-bold text-left w-full capitalize'>
                    Full Stack Web Developer
                </h2>
                <p className='font-light text-sm sm:text-md md:text-xl lg:text-2xl'>
                    Full Stack Developer with a solid background in building scalable, high-performance web applications using React,
                    Next.js and Express . Experienced in cloud solutions, secure payment systems, and backend architecture. Skilled
                    in JavaScript, TypeScript, MongoDB and PostgreSQL, with a passion for clean code and innovative solutions. Always looks forward to
                    contribute my expertise to a dynamic development team.
                </p>
            </ItemLayout>

            <ItemLayout className={'col-span-full xs:col-span-6 lg:col-span-4 text-accent'}>
                <p className='font-semibold w-full text-left text-3xl sm:text-5xl'>
                    1+ <sub className='font-semibold text-base'>Year Experience</sub>
                </p>
            </ItemLayout>
            
            <ItemLayout className={'col-span-full xs:col-span-6 lg:col-span-4 text-accent'}>
                <p className='font-semibold w-full text-left text-2xl sm:text-3xl'>
                    Qualified GATE 2023<sub className='font-semibold text-base'></sub>
                </p>
            </ItemLayout>

            <ItemLayout className={'col-span-full sm:col-span-6 md:col-span-4 !p-0'}>
                <img className='w-full h-auto' src="https://github-readme-stats.vercel.app/api/top-langs/?username=varunprajapatii&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false" alt="VarunPrajapatii" loading='lazy' />
            </ItemLayout>

            <ItemLayout className={'col-span-full md:col-span-8 !p-0'}>
                <img className='w-full h-auto' src="https://github-readme-stats.vercel.app/api?username=varunprajapatii&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false" alt="VarunPrajapatii" loading='lazy' />
            </ItemLayout>
            
            <ItemLayout className={'col-span-full'}>
                <img className='w-full h-auto' src="https://skillicons.dev/icons?i=js,ts,react,nextjs,express,redux,npm,html,css,cpp,tailwind,nodejs,postgres,mongodb,prisma,aws,cloudflare,docker,firebase,git,github,gitlab,vscode,postman,vercel&theme=dark" alt="VarunPrajapatii" loading='lazy' />
            </ItemLayout>

            <ItemLayout className={'col-span-full md:col-span-6 !p-0'}>
                <img className='w-full h-auto' src="https://github-readme-streak-stats.herokuapp.com?user=varunprajapatii&theme=dark&hide_border=true&date_format=M%20j%5B%2C%20Y%5D&type=png&ring=FEFE5B&currStreakLabel=FEFE5B&background=EB545400" alt="VarunPrajapatii" loading='lazy' />
            </ItemLayout>

            <ItemLayout className={'col-span-full md:col-span-6 !p-0'}>
                <img className='w-full h-auto' src="https://github-readme-stats.vercel.app/api/pin/?username=varunprajapatii&repo=proPAYn_app&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2" alt="VarunPrajapatii" loading='lazy' />
            </ItemLayout>

            
        </div>
    </section>
  )
}

export default AboutDetails
