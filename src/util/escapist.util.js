import rebus from '@me5on/rebus';


const {nlb} = rebus;


const escapist = (

    esc => token => nlb(esc) + token // + nla(token),

);


export default escapist;
