import './Header.css';
import Title from "../Title/Title";
import ActionBar from "../Actionbar/ActionBar";
import Menubar  from "../MenuBar/MenuBar";
import StarBorderIcon from '@mui/icons-material/StarBorder';


function Header() {
  return (
    <div className="header">
       <div className='header-left'>
          <img src="/Images/Google_Docs_logo.png" width="28" height="40" alt="Google Docs Icon" />
          <div className="title-menu-container">
           <div className='title-container'>
            <Title></Title>
            <StarBorderIcon className='star-icon' sx={{ml:1}}></StarBorderIcon>
           </div>
            <Menubar></Menubar>
          </div>
        </div>
          <div className="action-bar-container">
          <ActionBar></ActionBar>
          </div>

    </div>
  );
}
export default Header;
