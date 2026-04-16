"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';
import { FriendContext} from '../FriendsProvider/FriendsProvider';
import { BounceLoader } from 'react-spinners';

const Friends = () => {
        const {friends,loading} = useContext(FriendContext);
        if(loading){
            return <div className='flex justify-center items-center min-h-screen'><BounceLoader color="#244D3F"/></div>
        }

    return (
        <div className='max-w-7xl mx-auto pb-20'>
           <h3 className='text-2xl font-semibold mb-4'>Your Friends</h3> 
           <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6'>
            {friends.map(friend => <Link href={`/friendDetails/${friend.id}`} key={friend.id} className='bg-white rounded p-6 text-center space-y-3.5'>
                <Image src={friend.picture} alt={`${friend.name} 's picture`} width={80} height={80} className='rounded-full mx-auto'></Image>
                <h4 className='text-2xl font-semibold'>{friend.name}</h4>
                <p className='text-sm text-gray-400'>{friend.days_since_contact}d ago</p>
               <div className='flex gap-1 items-center justify-center font-medium'>
                {friend.tags.map((t,ind)=> <div key={ind} className='badge bg-[#CBFADB]'>{t}</div>)}
               </div>
               <div className={`badge text-white font-medium ${friend.status === 'on-track'? 'bg-[#244D3F]': friend.status=== 'overdue'? 'bg-[#EF4444]': friend.status==='almost due'? 'bg-[#EFAD44]': ''}`}>
                {friend.status}
               </div>
            </Link>)}
           </div>
        </div>
    );
};

export default Friends;