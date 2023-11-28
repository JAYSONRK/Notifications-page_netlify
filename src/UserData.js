import Mark from './images/avatar-mark-webber.webp';
import Angel from './images/avatar-angela-gray.webp';
import Jacob from './images/avatar-jacob-thompson.webp';
import Rizky from './images/avatar-rizky-hasanuddin.webp';
import Krimberly from './images/avatar-kimberly-smith.webp';
import Nathan from './images/avatar-nathan-peterson.webp';
import Anna from './images/avatar-anna-kim.webp';
import Chess from './images/image-chess.webp'

const UserData = [
    { 
        id : 1, 
        imgscr: Mark,
        user : 'Mark Webber',
        action: 'reacted to your recent post',
        highlight:'My first tournament today!',
        time: '1m',
        live: true,
        liveImg: '',
        comment: ''},
    { 
        id : 2, 
        imgscr: Angel,
        user : 'Angela Gray ',
        action: 'followed you',
        highlight:'',
        time: '5m',
        live: true,
        liveImg: '',
        comment: ''},
    { 
        id : 3, 
        imgscr: Jacob,
        user : 'Jacob Thompson ',
        action: 'has joined your group',
        highlight:'Chess Club',
        time: '1 day',
        live: true,
        liveImg: '',
        comment: ''},
    { 
        id : 4, 
        imgscr: Rizky,
        user : 'Rizky Hasanuddin',
        action: 'sent you a private message',
        highlight:'',
        time: '5 days',
        live: false,
        liveImg: '',
        comment: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game."}, 
    { 
        id : 5, 
        imgscr: Krimberly,
        user : 'Kimberly Smith',
        action: 'commented on your picture',
        highlight:'',
        time: '1 week',
        live: false,
        liveImg: Chess,
        comment: ''},
    { 
        id : 6, 
        imgscr: Nathan,
        user : 'Nathan Peterson', 
        action: 'reacted to your recent post',
        highlight:'5 end-game strategies to increase your win rate',
        time: '2 weeks',
        live: false,
        liveImg: '',
        comment: ''},
    { 
        id : 7, 
        imgscr: Anna,
        user : 'Anna Kim ',
        action: 'left the group',
        highlight:'Chess Club',
        time: '2 weeks',
        live: false,
        liveImg: '',
        comment: ''}]

        export default UserData;