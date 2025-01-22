import { KeyboardEvent, useState, useRef, useEffect, createRef, SetStateAction } from "react";

import ArrowSVG from './assets/arrow.svg';

import Accessibility from "../../utils/accessibility";

import './assets/style.css';

import { StageBadgeProps, } from "../StageBadge";

interface DropdownPropsI {
    onChange: (newlySelected: string) => Promise<void> | void;
    selectedOption: string;
    options: Array<string>;
    hideLabel?: Boolean;
    classes?: string;
    label: string;
    id: string;
    OptionWrapperEl?: ({ stage }: StageBadgeProps) => JSX.Element;
    hideArrow?: Boolean;
}

const Dropdown = ({ options, onChange, selectedOption, hideLabel, classes, id, label, OptionWrapperEl, hideArrow }: DropdownPropsI) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selection, setSelection] = useState(selectedOption);
    const [selectedIndex, setSelectedIndex] = useState<SetStateAction<null | number>>(null);
    const dropDownElRef = useRef<HTMLDivElement>(null);
    const optionRefs = useRef(options.map(() => createRef<HTMLDivElement>()));
    const maxIndex = optionRefs.current.length - 1;
    let arrowClass = hideArrow ? 'hideArrow' : 'showArrow';

    useEffect(() => {
        setSelectedIndex(0)
        optionRefs.current[0].current?.focus();
    }, [isDropdownOpen])

    const handleDropdownOpen = () => {
        setIsDropdownOpen(true);
    };

    const onDropdownChange = (newSelection: string) => {
        setSelection(newSelection);

        if (onChange) {
            onChange(newSelection);
        }
    };

    const handleDropdownKeyPress = (event: KeyboardEvent) => {
        const { code } = event;
        const { toggleKeys, closeKeys, upKeys, downKeys } = Accessibility;
        if (code === 'Tab' && isDropdownOpen) {
            event.preventDefault();
        }
        if (toggleKeys.includes(code)) {
            event.preventDefault();
            if (typeof (selectedIndex) !== 'number') return;
            if (!isDropdownOpen) {
                handleDropdownOpen();
                return;
            }
            let newlySelected = optionRefs.current[selectedIndex].current?.textContent || '';
            onDropdownChange(newlySelected);
            closeDropdown();
            return;
        };
        if (closeKeys.includes(code)) {
            event.preventDefault();
            closeDropdown();
            return;
        }
        if (upKeys.includes(code)) {
            event.preventDefault();
            if (typeof (selectedIndex) !== 'number') return;
            if (selectedIndex === 0) {
                optionRefs.current[maxIndex].current?.focus();
                setSelectedIndex(maxIndex);
                return;
            }
            let newIndex = selectedIndex - 1;
            optionRefs.current[newIndex].current?.focus();
            setSelectedIndex(newIndex);
            return;
        }
        if (downKeys.includes(code)) {
            event.preventDefault();
            if (typeof (selectedIndex) !== 'number') return;
            if (selectedIndex === maxIndex) {
                optionRefs.current[0].current?.focus();
                setSelectedIndex(0);
                return;
            }
            let newIndex = selectedIndex + 1;
            optionRefs.current[newIndex].current?.focus();
            setSelectedIndex(newIndex);
            return;
        }
    };

    const handleDropdownClick = () => {
        handleDropdownOpen();
    };

    const handleClick = (newlySelected: string) => {
        onDropdownChange(newlySelected);
    };

    const closeDropdown = () => {
        setIsDropdownOpen(false);
        dropDownElRef.current?.focus();
    };

    return (
        <div className={`dropdown ${classes ?? classes}`}>
            <label
                htmlFor={id}
                className={`block font-medium ${hideLabel ? 'hidden' : ''}`}
            >
                {label ? label : ''}
            </label>
            <div
                className={`dropdown-select-container ${isDropdownOpen ? 'active' : ''}`}
                id={id}
                role="combobox"
                onClick={handleDropdownClick}
                onKeyDown={handleDropdownKeyPress}
                tabIndex={0}
                aria-expanded={isDropdownOpen}
                aria-controls={id}
                aria-haspopup="listbox"
                ref={dropDownElRef}
            >
                <div className="selected-option p-2">
                    {OptionWrapperEl ? <OptionWrapperEl stage={selection} /> : <p>{selection}</p>}
                    <div className={`arrow ${arrowClass}`}>
                        <img src={ArrowSVG} alt="arrow icon" />
                    </div>
                </div>
                <div className='dropdown-options shadow-lg' id={id} onMouseLeave={closeDropdown} role="listbox" aria-expanded={isDropdownOpen}>
                    {options && options.map((option, index) => {
                        return (
                            <div className="options-container p-2" key={option.split(' ').join('-')} tabIndex={0} onClick={() => handleClick(option)} ref={optionRefs.current[index]} aria-label={option} role="option" aria-selected={options.indexOf(option) === selectedIndex}>
                                {OptionWrapperEl ? <OptionWrapperEl stage={option} /> : <p>{option}</p>}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default Dropdown;