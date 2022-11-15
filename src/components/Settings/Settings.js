import { useState } from 'react';

import './settings.scss';

if(localStorage.getItem('dark-theme') === 'true') {
    document.body.classList.add('dark');
}

const Settings = () => {

    const [darkTheme , setDarkTheme] = useState(localStorage.getItem('dark-theme') === 'true' ? true : false);

    if(localStorage.getItem('dark-theme') === 'true') {
        document.body.classList.add('dark');
    }

    const unchecked = (
        <svg className="settings__content_item_checkbox_icon settings__content_item_checkbox_icon-unchecked" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="3 3 18 18" fill="#000">
            <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
        </svg>
    );

    const checked = (
        <svg className="settings__content_item_checkbox_icon settings__content_item_checkbox_icon-checked" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="3 3 18 18" fill="#000"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/>
            <path d="M18 9l-1.4-1.4-6.6 6.6-2.6-2.6L6 13l4 4z"/>
        </svg>
    );

    return (
        <div className="settings">
            <div className="settings__overlay" onClick={() => document.querySelector('.app__settings').style.display = 'none'}></div>
            <div className="settings__block">
                <div className="settings__header">
                    <div className="settings__header_icon" onClick={() => document.querySelector('.app__settings').style.display = 'none'}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="settings__header_title">Settings</div>
                </div>
                <div className="settings__content">
                    <div className="settings__content_section">
                        <div className="settings__content_section_title">Display Options</div>
                        <div className="settings__content_item">
                            <h2 className="settings__content_item_title">Add new items to the bottom</h2>
                            <div className="settings__content_item_checkbox">
                                {false ? checked : unchecked}
                                <input readOnly checked={false} type="checkbox" />
                            </div>
                        </div>
                        <div className="settings__content_item">
                            <h2 className="settings__content_item_title">Enable dark theme</h2>
                            <div className="settings__content_item_checkbox"
                                onClick={() => {
                                    if(localStorage.getItem('dark-theme') === 'true') {
                                        document.body.classList.remove('dark');
                                        localStorage.setItem('dark-theme' , 'false');
                                        setDarkTheme(false);
                                    }
                                    else {
                                        document.body.classList.add('dark');
                                        localStorage.setItem('dark-theme' , 'true');
                                        setDarkTheme(true);
                                    }
                                }}
                            >
                                {darkTheme ? checked : unchecked}
                                <input readOnly checked={darkTheme} type="checkbox" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Settings;