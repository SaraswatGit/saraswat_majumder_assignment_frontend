import './Editor.css'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
function Editor() {
    return (
      <div className="editor-container" >
        <div className='text-area-container'>
        <FormatListBulletedIcon className='bullet-icon'></FormatListBulletedIcon>
<textarea className='editor-text-area' placeholder='Type @ to insert'></textarea>
</div>
      </div>
    );
  }
  export default Editor;
