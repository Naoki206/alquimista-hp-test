/* eslint-disable react/destructuring-assignment */
import React from 'react';
import 'twin.macro';
import Writer from '../blog/writer';
import Member from '../member';

const MemberGrid: React.FC<{
  members: GatsbyTypes.Maybe<
    readonly GatsbyTypes.Maybe<
      Pick<GatsbyTypes.SiteSiteMetadataMemberEngineer, 'description' | 'name' | 'role' | 'twitter'>
    >[]
  >;
  isBlogWriters?: boolean;
}> = ({ members, isBlogWriters }) => {
  const [open, setOpen] = React.useState(-1);

  if (isBlogWriters) {
    return (
      <ol tw="list-none mb-0 ">
        <div tw="grid sm:grid-cols-2 md:grid-cols-3 justify-center gap-12">
          {/* @ts-ignore */}
          {members.map((member, index) => (
            <Writer
              key={member?.name}
              open={open}
              setOpen={setOpen}
              // @ts-ignore
              member={member}
              index={index}
            />
          ))}
        </div>
      </ol>
    );
  }

  return (
    <ol tw="list-none mb-0 ">
      <div tw="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center gap-12">
        {/* @ts-ignore */}
        {members.map((member, index) => (
          <Member key={member?.name} open={open} setOpen={setOpen} member={member} index={index} />
        ))}
      </div>
    </ol>
  );
};

export default MemberGrid;
