import FormWebinar from '../../components/FormWebinar';
import Image from "next/legacy/image";
import Head from 'next/head';
import { ArrowUpIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/router';
import CountDown from '../../components/CountDown';
import EventSchedule from '../../components/EventSchedule';
import WebinarPrograms from '../../components/WebinarPrograms';
import BenefitWebinar from '../../components/BenefitWebinar';
import SpeakerProfile from '../../components/SpeakerProfile';
import OpeningCopy from '../../components/OpeningCopy';
import MediaPartners from '../../components/MediaPartners';
import SupportedBy from '../../components/SupportedBy';

const Bubble = ({ className }) => {
    return <div className={`z-[-99] rounded-full ${className}`}></div>;
};

const webinar = () => {
    const router = useRouter();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <main className='overflow-hidden relative flex flex-col gap-24 items-center mx-auto px-4 pt-16 pb-8 w-screen min-h-screen md:w-[720px]'>
            <Head>
                <title>IMV Data Science Webinar</title>
            </Head>

            <Bubble className='absolute -top-10 -left-20 w-40 h-40 border-[2em] border-pink-50' />
            <Bubble className='absolute top-[5%] -right-32 w-60 h-60 border-[3em] border-blue-100' />
            <Bubble className='absolute -bottom-20 -right-20 w-80 h-80 border-[4em] border-yellow-100' />
            <Bubble className='absolute bottom-[5%] -left-32 w-60 h-60 border-[3em] border-purple-100' />

            <div
                onClick={() => router.push('/')}
                className='w-16 cursor-pointer'>
                <Image
                    src='/logo.webp'
                    width={64}
                    height={64}
                    objectFit='contain'
                    alt='IMV Logo'
                />
            </div>

            <div className='flex justify-center items-center -mt-8 -mb-12 px-4 py-2 rounded-full text-blue-500 bg-blue-100'>
                <p className='text-sm font-bold uppercase'>Webinar</p>
            </div>

            <div>
                <h1 className='-mt-8 py-1 text-4xl md:text-5xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-pink-500 to-yellow-500'>
                    Data Science nggak penting!
                </h1>
                <h2 className='mt-4 text-2xl text-center font-bold '>
                    Benar nggak sih?
                </h2>
            </div>

            <OpeningCopy />

            <section className='flex flex-col md:flex-row justify-center gap-16'>
                <SpeakerProfile
                    imageURL='/abdan.jpg'
                    name='Muhammad Abdan Mulia'
                    position='Data Scientist'
                    otherDescription='Telkom Indonesia'
                />
                <SpeakerProfile
                    imageURL='/lilian.jpeg'
                    name='Lilian Tjong'
                    position='Lead Data Scientist'
                    otherDescription='SayurBox'
                />
                <SpeakerProfile
                    imageURL='/mursil.jpeg'
                    name='Mursil Shadruddin Afkar'
                    position='Senior Data Scientist'
                    otherDescription='Tokopedia'
                />
            </section>

            <EventSchedule />
            <CountDown />
            <WebinarPrograms />
            <section className='flex flex-col items-center justify-center gap-y-16'>
                <div className='text-center'>
                    <h1 className='text-2xl font-bold mb-8'>
                        Talkshow dengan narasumber
                        <br />
                        akan dipandu oleh:
                    </h1>
                    <div className='flex flex-col md:flex-row justify-center gap-16'>
                        <SpeakerProfile
                            imageURL='/iky.jpg'
                            name='M. Khairul Rizki'
                            position='Moderator'
                            otherDescription='IMV Laboratory'
                        />
                        <SpeakerProfile
                            imageURL='/aya.jpeg'
                            name='Agniya Tazkiya Aulia'
                            position='Master of Ceremony'
                            otherDescription='IMV Laboratory'
                        />
                    </div>
                </div>
            </section>

            <BenefitWebinar />

            {/* <FormWebinar /> */}

            <SupportedBy />

            <MediaPartners />
            <section className='flex flex-col items-center'>
                <button
                    onClick={scrollToTop}
                    className='mt-16 p-4 rounded-full bg-white shadow-lg hover:shadow-xl hover:ring-0 ease-linear duration-300 focus:outline-none'>
                    <ArrowUpIcon className='w-6 h-6 text-gray-900' />
                </button>
                <p className='mt-4 text-sm'>Kembali ke atas</p>
            </section>
        </main>
    );
};

export default webinar;
