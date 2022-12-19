 import React from 'react' ;

 import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
 import ConfirmationNumberOutlinedIcon from '@material-ui/icons/ConfirmationNumberOutlined';
 import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined';


 export const SidebarData = [
    {
        title: "Bikes",
        icon: <DirectionsBikeIcon/>,
        Link: "/bikes"
    },

    {
        title: "Stickers",
        icon: <ConfirmationNumberOutlinedIcon/>,
        Link: "/stickers"
    },

    {
        title: "Transactions",
        icon: <AccountBalanceWalletOutlinedIcon/>,
        Link: "/transactions"
    }
 ]