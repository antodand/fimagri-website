import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Logo from '@/public/images/logo.png';

export function Footer() {
  return (
    <footer className='shadow-[0_0px_10px_rgba(0,0,0,0.25)]'>
      <div className='p-4'>
        <div className='m-4'>
          <Image src={Logo} alt='Fimagri' width='100' />
        </div>
        <p className='mx-4 my-8 border-b-2 border-gray-300'></p>
        <div className='m-4 md:flex justify-between text-center'>
          <div className='m-4 basis-full'>
            <h2 className='text-2xl font-extrabold text-lime-500'>Sede legale</h2>
            <p className='my-2 border-b-2 border-gray-300'></p>
            <p>Viale Aldo Moro, 54</p>
            <p>71043, Manfredonia (FG)</p>
          </div>
          <div className='m-4 basis-full'>
            <h2 className='text-2xl font-extrabold text-lime-500'>Sede operativa</h2>
            <p className='my-2 border-b-2 border-gray-300'></p>
            <p>Località Faralli</p>
            <p>71022, Ascoli Satriano (FG)</p>
          </div>
          <div className='m-4 basis-full'>
            <h2 className='text-2xl font-extrabold text-lime-500'>Contatti</h2>
            <p className='my-2 border-b-2 border-gray-300'></p>
            <div className='flex flex-col items-center'>
              <p className='flex items-center'><FontAwesomeIcon icon={faEnvelope} className="h-4 mr-2" />amministrazione@opfimagri.com</p>
              <p className='flex items-center'><FontAwesomeIcon icon={faPhone} className="h-4 mr-2" />+39 0884 588518</p>
            </div>
          </div>
        </div>
      </div>
      <div className='p-4'>
        <p className='mx-4'>© 2025 Fimagri - Tutti i diritti riservati</p>
      </div>
    </footer> 
  );
};