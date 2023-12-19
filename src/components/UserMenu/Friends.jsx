import { useState, useMemo } from 'react';
import css from './Friends.module.css';

const initialFriends = [
  'Eddard Stark',
  'Catelyn Stark',
  'Robb Stark',
  'Sansa Stark',
  'Arya Stark',
  'Bran Stark',
  'Rickon Stark',
  'John Snow',
  'Robert Baratheon',
  'Cersei Lannister',
  'Jaime Lannister',
  'Tyrion Lannister',
  'Daenerys Targaryen',
  'Viserys Targaryen',
  'Rhaegar Targaryen',
  'Khal Drogo',
  'Jorah Mormont',
  'Petyr Baelish',
  'Varys Varys',
  'Samwell Tarly',
  'Gilly Tarly',
  'Davos Seaworth',
  'Stannis Baratheon',
  'Melisandre Fire',
  'Renly Baratheon',
  'Margaery Tyrell',
  'Tommen Baratheon',
  'Joffrey Baratheon',
  'Cersei Lannister',
  'Tywin Lannister',
  'Theon Greyjoy',
  'Yara Greyjoy',
  'Balon Greyjoy',
  'Asha Greyjoy',
  'Ramsay Bolton',
  'Reek Reek',
  'Jon Connington',
  'Aegon Targaryen',
  'Barristan Selmy',
  'Hizdahr zoLoraq',
  'Quentyn Martell',
  'Doran Martell',
  'Arianne Martell',
  'Oberyn Martell',
  'Ellaria Sand',
  'Tyrstane Martell',
  'Areo Hotah',
  'Olenna Tyrell',
  'Brienne of Tarth',
  'Podrick Payne',
  'Bronn the Brave',
  'Varys Maris',
  'Grand Maester Pycelle',
  'Kevan Lannister',
  'Lancel Lannister',
  'Olyvar Boliwar',
  'Mace Tyrell',
  'Pycelle Qu',
  'Qyburn Wu',
  'Roose Bolton',
  'Walder Frey',
  'Edmure Tully',
  'Brynden Tully',
  'Hoster Tully',
  'Lysa Arryn',
  'Robin Arryn',
  'Jon Arryn',
  'Hodor Hodor',
  'Beric Dondarrion',
  'Thoros of Myr',
  'Jaqen Hghar',
  'Syrio Forel',
  'Sandor Clegane',
  'Gregor Clegane',
  'Khal Pono',
  'Khal Drogo',
  'Irri Farell',
  'Rakharo Li',
  'Jhogo Boho',
  'Drogon Aghhhrrrr',
  'Rhaegal Aghhhrrrr',
  'Viserion Aghhhrrrr',
  'Grey Worm',
  'Missandei Nice',
  'Daario Naharis',
  'Meera Reed',
  'Jojen Reed',
  'Grenn Drenn',
  'Dolorous Edd',
  'Ygritte Wild',
  'Mag the Mighty',
  'Orell McOrell',
  'Qhorin Halfhand',
];

export default function Friends() {
  const [count, setCount] = useState(0);
  const [friends] = useState(initialFriends);
  const [filter, setFilter] = useState('');

  const visibleFriends = useMemo(() => {
    // console.log('we filter our dear friends' + Date.now());
    return friends.filter(friend => friend.toLowerCase().includes(filter));
  }, [filter, friends]);

  //   const visibleFriends = friends.filter(friend =>
  //     friend.toLowerCase().includes(filter)
  //   );

  return (
    <div className={css.div}>
      <div className={css.filter}>
        <button
          className={css.button}
          type="button"
          onClick={() => setCount(c => c + 1)}
        >
          {count}
        </button>
        <input
          className={css.input}
          type="text"
          onChange={e => setFilter(e.target.value)}
          value={filter}
        />
      </div>
      <ul>
        {visibleFriends.map((friend, idx) => (
          <li className={css.item} key={idx}>
            {friend}
          </li>
        ))}
      </ul>
    </div>
  );
}
