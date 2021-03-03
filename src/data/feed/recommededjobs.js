import uuid from 'uuid/v1';

export default [
    {
        id: uuid(),
        calendar: { month: 'PHP', day: '' },
        title: "Php Developer",
        organizer: 'Webgarh pvt ltd',
        time: '24 days ago',
        availability: "full time",
        location: 'The Liberty Warehouse, New Yourk',
        to: '/pages/event-detail'
    }];