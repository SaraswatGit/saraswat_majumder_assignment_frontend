import './MenuBar.css';

function Menubar() {
    const menuBarItems = ['File','Edit','View','Insert','Format','Tools','Extensions','Help']

    return (
      <div className="menu-bar">
        {
            menuBarItems.map((item) =>
            {
                return (
                    <div className="menu-bar-item">{item}</div>
                )
            }
            )
        }
      </div>
    );
  }
  export default Menubar;
