import { BsBoxArrowInLeft } from 'react-icons/bs';

export default function Ola() {
  return (
    <div className="bg-white sm:p-4 sm:flex sm:items-center sm:justify-between  ">
      <div className="flex w-[100%] ">

      <img class="h-11 w-auto ml-[5%]  2xl:mt-[0%] mt-[5%]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRISoong3jgtygnvx8loDX_AvseejOZBfXe8kzPNxkQ&s" alt="Your Company"></img>
      <a href="/">
        <BsBoxArrowInLeft className='sm:text-[50px] text-[30px] sm:hidden text-black sm:ml-[30px] ml-[1200%] ms:mt-[0%] mt-[100%]'>
        </BsBoxArrowInLeft>
      </a>
      </div>
      <div className="sm:flex w-[100%]">
        <div className="text-red-600 text-[20px] sm:text-[30px] sm:ml-[30%] ml-[30px]">
          Olá: <span className="text-black text-[12px] sm:text-[20px]">ANDERSON</span>
        </div>
        <div className="text-red-600 text-[20px] sm:text-[30px] ml-[30px]">
          Cargo: <span className=" text-[#000] text-[10px] sm:text-[20px] ">SEGURANÇA DE TRABALHO</span>
        </div>
      </div>
      <a href="/">
        <BsBoxArrowInLeft className='sm:text-[50px]  text-[30px] text-black sm:ml-[30px] ml-[1300%]'>
        </BsBoxArrowInLeft>
      </a>
      
    </div>
  );
}
