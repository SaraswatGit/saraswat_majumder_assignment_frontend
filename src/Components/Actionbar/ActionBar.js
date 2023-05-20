import './ActionBar.css'
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
function ActionBar() {
    return (
      <div className='action-bar'>
        <div className='comment-icon'>
<CommentOutlinedIcon sx={{height:25 , width: 30}} />
</div>
<div className='google-meet'>
<VideocamOutlinedIcon sx={{height:30 , width: 55}}></VideocamOutlinedIcon>
<ArrowDropDownIcon></ArrowDropDownIcon>
</div>
<div className='share-button'>
  <LockOutlinedIcon sx={{mr:1}}></LockOutlinedIcon>
  Share</div>
  <img src="/Images/profile_pic.jpeg" className='profile-pic' alt="Profile Pic" />

      </div>
    );
  }
  export default ActionBar;
