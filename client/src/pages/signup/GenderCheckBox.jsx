import React from 'react';

export const GenderCheckBox = () => {
  return (
    <div className="flex w-full">
      <div className="form-control mt-2">
        <label className="cursor-pointer label">
          <span className="label-text">Male</span>
          <input
            type="checkbox"
            defaultChecked
            className="checkbox checkbox-secondary ml-2"
          />
        </label>
      </div>
      <div className="form-control mt-2">
        <label className="cursor-pointer label">
          <span className="label-text">Female </span>
          <input
            type="checkbox"
            defaultChecked
            className="checkbox checkbox-secondary ml-2"
          />
        </label>
      </div>
    </div>
  );
};
