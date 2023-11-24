import PageTitle from './PageTitle/PageTitle';
import EventBoard from './EventBoard/EventBoard';

import upcomingEvents from '../upcoming-events.json';

const App = () => {
  return (
    <div>
      <PageTitle text="24th core worlds coalition conference" />
      <EventBoard events={upcomingEvents} />
    </div>
  );
};

export default App;
