import { Avatar } from '@mui/material';
import { FacebookSelector } from '@charkour/react-reactions';
import styles from './style.module.scss';
import { useState } from 'react';

const mapping = {
  like: {
    label: 'Thich',
    className: 'font-bold text-blue-900'
  },
  wow: {
    label: 'Wow',
    className: 'font-bold text-yellow-600'
  },
  haha: {
    label: 'Haha',
    className: 'font-bold text-yellow-900'
  },
  love: {
    label: 'Yeu',
    className: 'font-bold text-red-900'
  },
  sad: {
    label: 'Buon',
    className: 'font-bold text-yellow-900'
  },
  angry: {
    label: 'Phan no',
    className: 'font-bold text-red-700'
  }
};

interface Prop {
  content: string;
}

function Comment({ content }: Prop) {
  const [text, setText] = useState<
    'like' | 'wow' | 'haha' | 'love' | 'sad' | 'angry' | null
  >(null);

  return (
    <div className={'flex'}>
      <div>
        <Avatar
          alt="Remy Sharp"
          src="https://yt3.ggpht.com/in7ji16oeon_ypiAMeH-ZdTWSaIC54yZqMsFg0X3uhTBk4MDCuIkRf6TIoQQCqjl20DSdakhSQ=s48-c-k-c0x00ffffff-no-nd-rj"
        />
      </div>
      <div className={'ml-4'}>
        <div className="rounded-xl bg-gray-100 p-2">
          <div className="font-bold">Someone</div>
          <p>{content}</p>
        </div>
        {/*<div className={styles.like}>*/}
        {/*  <div>{!text && 'thich'}</div>*/}
        {/*  {!!text && (*/}
        {/*    <div className={mapping[text].className}>{mapping[text].label}</div>*/}
        {/*  )}*/}
        {/*  <div className={styles.emoji}>*/}
        {/*    <FacebookSelector*/}
        {/*      onSelect={(data) => {*/}
        {/*        if (*/}
        {/*          !['like', 'wow', 'haha', 'love', 'sad', 'angry'].includes(*/}
        {/*            data*/}
        {/*          )*/}
        {/*        )*/}
        {/*          return;*/}
        {/*        // @ts-ignore*/}
        {/*        setText(data);*/}
        {/*      }}*/}
        {/*    />*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
    </div>
  );
}

export default Comment;
