import {useState} from 'react';
import classNames from 'classnames';

type CheckboxProps = {
  label: string,
  checked?: boolean,
  extraClasses?: string[],
  isCrossedWhenDone?: boolean,
  checkedClass?: string
}


function Checkbox({label, checked, extraClasses = [], checkedClass = ""}: CheckboxProps):JSX.Element {
  const defaultChecked = checked ? checked : false;
  const [isChecked, setIsChecked] = useState(defaultChecked);

  const checkboxClass = classNames({
    'checkbox': true,
    [extraClasses.join(" ")]: !!extraClasses.length,
    [checkedClass]: checkedClass && isChecked
  });

  return (
    <>
      <div className={checkboxClass}>
        <label className="checkbox__inner">
          <input
            className={`checkbox__input ${isChecked ? "checked" : ""}`}
            type="checkbox"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
          />
          <span className="checkbox__emulator"></span>
          <span className="checkbox__label">{label}</span>
        </label>
      </div>
    </>
  )
}

export default Checkbox;
