import './AppBar.css'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

function AppsBar() {
    return (
      <div className="apps-bar">
<div className='icons'>
<a href="https://calendar.google.com/calendar" className='app-icon'  rel="noreferrer" target="_blank"><img src="/Images/google_calendar_logo.png" alt="Google Calendar Logo" height="30" width="30"/></a>
<a href="https://keep.google.com/" className='app-icon'  rel="noreferrer" target="_blank"><img src="/Images/google_keep_logo.png" alt="Google Keep Logo" height="30" width="30"/></a>
<a href="https://tasksboard.com" className='app-icon'  rel="noreferrer" target="_blank"><img src="/Images/google_tasks_logo.png" alt="Google Tasks Logo" height="30" width="30"/></a>
<a href="https://contacts.google.com" className='app-icon'  rel="noreferrer" target="_blank"><img src="/Images/google_contacts_logo.png" alt="Google Contacs Logo" height="30" width="30"/></a>
<a href="https://maps.google.com" className='app-icon'  rel="noreferrer" target="_blank"><img src="/Images/google_maps_logo.png" alt="Google Maps Logo" height="30" width="30"/></a>
</div>
<AddOutlinedIcon className='app-icon add-icon'></AddOutlinedIcon>
      </div>
    );
  }
  export default AppsBar;
