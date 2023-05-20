import { useState } from 'react';
import './Toolbar.css'
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import LocalPrintshopTwoToneIcon from '@mui/icons-material/LocalPrintshopTwoTone';
import SpellcheckTwoToneIcon from '@mui/icons-material/SpellcheckTwoTone';
import ImagesearchRollerTwoToneIcon from '@mui/icons-material/ImagesearchRollerTwoTone';
import ArrowDropDownTwoToneIcon from '@mui/icons-material/ArrowDropDownTwoTone';
import Divider from '@mui/material/Divider';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import FormatBoldOutlinedIcon from '@mui/icons-material/FormatBoldOutlined';
import FormatItalicOutlinedIcon from '@mui/icons-material/FormatItalicOutlined';
import FormatUnderlinedOutlinedIcon from '@mui/icons-material/FormatUnderlinedOutlined';
import FormatColorTextOutlinedIcon from '@mui/icons-material/FormatColorTextOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
function Toolbar() {
  const [fontSize, setFontSize] = useState(11);
  const increaseFontSize = () => {
    setFontSize(fontSize+1);
  }
  const decreaseFontSize = () => {
    setFontSize(fontSize-1);
  }
    return (
      <div className="toolbar">
<UndoIcon className='toolbar-icon'></UndoIcon>
<RedoIcon  className='toolbar-icon'></RedoIcon>
<LocalPrintshopTwoToneIcon  className='toolbar-icon'></LocalPrintshopTwoToneIcon>
<SpellcheckTwoToneIcon  className='toolbar-icon'></SpellcheckTwoToneIcon>
<ImagesearchRollerTwoToneIcon  className='toolbar-icon'></ImagesearchRollerTwoToneIcon>
<div className='dropdown'>
  100% <ArrowDropDownTwoToneIcon  className='toolbar-icon' sx={{ml:1}}></ArrowDropDownTwoToneIcon>
</div>
<Divider orientation="vertical" variant="middle" flexItem />
<div className='dropdown'>
  Normal Text <ArrowDropDownTwoToneIcon  className='toolbar-icon' sx={{ml:1}}></ArrowDropDownTwoToneIcon>
</div>
<Divider orientation="vertical" variant="middle" flexItem />
<div className='dropdown'>
  Open...<ArrowDropDownTwoToneIcon  className='toolbar-icon' sx={{ml:1}}></ArrowDropDownTwoToneIcon>
</div>
<Divider orientation="vertical" variant="middle" flexItem />
<RemoveOutlinedIcon onClick={decreaseFontSize}  className='toolbar-icon'></RemoveOutlinedIcon>
<div className='fontsizebox'>{fontSize}</div>
<AddOutlinedIcon  onClick={increaseFontSize} className='toolbar-icon'></AddOutlinedIcon>
<Divider orientation="vertical" variant="middle" flexItem />
<FormatBoldOutlinedIcon  className='toolbar-icon'></FormatBoldOutlinedIcon>
<FormatItalicOutlinedIcon  className='toolbar-icon'></FormatItalicOutlinedIcon>
<FormatUnderlinedOutlinedIcon  className='toolbar-icon'></FormatUnderlinedOutlinedIcon>
<FormatColorTextOutlinedIcon  className='toolbar-icon'></FormatColorTextOutlinedIcon>
  <CreateOutlinedIcon  className='toolbar-icon'></CreateOutlinedIcon>
  <Divider orientation="vertical" variant="middle" flexItem />
  <div className='dropdown editing'>
  <CreateOutlinedIcon  ></CreateOutlinedIcon>
  <ArrowDropDownTwoToneIcon sx={{ml:1}}></ArrowDropDownTwoToneIcon>
</div>
<Divider orientation="vertical" variant="middle" flexItem />
<KeyboardArrowUpOutlinedIcon  className='toolbar-icon'></KeyboardArrowUpOutlinedIcon>

      </div>
    );
  }
  export default Toolbar;
