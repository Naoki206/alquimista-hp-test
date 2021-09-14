/* eslint-disable react/destructuring-assignment */
import { Link } from 'gatsby';
import React from 'react';
import 'twin.macro';

const Writer: React.FC<{
  member: {
    name: string;
    role: string;
    twitter: string;
    description: string;
  };
  index: number;
  open: number;
  setOpen: React.Dispatch<React.SetStateAction<number>>;
}> = ({ member, index, setOpen, open }) => (
  <div>
    <Link to={`/blog/writer/${member?.name}` || '/'}>
      <div tw="flex justify-center relative">
        {/*  eslint-disable-next-line no-console */}
        {open !== index ? (
          <img
            tw="w-48 rounded-full mb-4 mx-0 hover:opacity-0 duration-150 z-10"
            src={`/${member?.name}.jpg`}
            alt={member?.name}
          />
        ) : (
          <img tw="w-48 mb-4 opacity-0" src={`/${member?.name}.jpg`} alt={member?.name} />
        )}
        <img
          tw="absolute w-48 rounded-full bottom-4"
          src={`/${member?.name}_smile.jpg`}
          alt={member?.name}
        />
      </div>
      <p tw="mb-2 text-darkBlue">{member?.role}</p>
      <div tw="flex justify-center items-center mb-5">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <p tw="font-bold pr-2 mb-0 text-darkBlue">{member?.name}</p>
        {member?.twitter && <img tw="w-5" src="/twitter-icon.svg" alt="/twitter-icon.svg" />}
      </div>
    </Link>

    {open === index ? (
      <div>
        <p tw="font-bold text-sm text-left">{member?.description}</p>
        <div tw="flex w-full justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            tw="h-6 w-6 mt-3 mx-0 bg-darkBlue rounded-full text-paleOrange"
            onClick={() => setOpen(-1)}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" />
          </svg>
        </div>
      </div>
    ) : (
      <div tw="flex w-full justify-center transition duration-150">
        <svg
          tw="h-6 w-6 mt-3 mx-0 bg-darkBlue rounded-full text-paleOrange"
          onClick={() => setOpen(index)}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
        </svg>
      </div>
    )}
  </div>
);

export default Writer;
