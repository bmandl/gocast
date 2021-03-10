import React from 'react';
import Episodes from '../../components/Episodes/Episodes';
import PageLayout from '../../components/PageLayout/PageLayout';

export default () => {
  const episodes = [
    {
      id: 0,
      img: '/images/dog.png',
      title: "Visiting my best friend's city for first time",
      text:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam , sed diam voluptua.',
      tags: ['Season 1', 'Posted on Sep 3, 2020', 'audio / goodbyes / life'],
    },
    {
      id: 1,
      img: '/images/book.png',
      title: 'An interesting read I definitely recommend',
      text:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam , sed diam voluptua.',
      tags: ['Season 1', 'Posted on July 29, 2020', 'audio / goodbyes / life'],
    },
    {
      id: 2,
      img: '/images/door.png',
      title: 'What if all my adventures go back home?',
      text:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam , sed diam voluptua.',
      tags: ['Season 1', 'Posted on Sep 11, 2020', 'audio / goodbyes / life'],
    },
    {
      id: 3,
      img: '/images/tower.png',
      title: "Visiting my best friend's city for first time",
      text:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam , sed diam voluptua.',
      tags: ['Season 1', 'Posted on Sep 11, 2020', 'audio / goodbyes / life'],
    },
    {
      id: 4,
      img: '/images/field.png',
      title: 'An interesting read I definitely recommend',
      text:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam , sed diam voluptua.',
      tags: ['Season 1', 'Posted on Sep 11, 2020', 'audio / goodbyes / life'],
    },
  ];

  return (
    <PageLayout title="Episodes" page>
      <Episodes title="All Podcast Episodes" episodes={episodes} />
    </PageLayout>
  );
};
