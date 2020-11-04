import React, { useEffect } from "react";
import { useState } from "react";

import { FormCreateContainer } from "./styles";

import createsubmit from "../../global/assets/icons/createsubmit.svg";

export default function FormCreate({ onSubmit }) {
  const [name, setProjectName] = useState("");
  const [platform, setPlatform] = useState([]);
  const [description, setDescription] = useState("");
  const [scope, setScope] = useState("");
  const accounts = 12345;

  function setCheckbox(value, checked) {
    if (checked) {
      if (platform.lenght > 0) setPlatform([value]);
      setPlatform([...platform, value]);
    } else {
      setPlatform(platform.filter((el) => el !== value));
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();

    await onSubmit({
      name,
      platform,
      description,
      scope,
      accounts,
    });
  }

  return (
    <FormCreateContainer onSubmit={handleSubmit}>
      <div>
        <div>
          <span>Project Name</span>
          <input
            type="text"
            name="project_name"
            id="project_name"
            placeholder=""
            required
            value={name}
            onChange={(e) => setProjectName(e.target.value)}
          />
        </div>
        <section>
          <span>Platform</span>
          <div>
            <div>
              <input
                type="checkbox"
                name="web"
                id="web"
                value="Web"
                onChange={(e) => {
                  setCheckbox(e.target.value, e.target.checked);
                }}
              />
              <label htmlFor="web">Web</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="mobile"
                id="mobile"
                value="Mobile"
                onChange={(e) => {
                  setCheckbox(e.target.value, e.target.checked);
                }}
              />
              <label htmlFor="mobile">Mobile</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="desktop"
                id="destkop"
                value="Desktop"
                onChange={(e) => {
                  setCheckbox(e.target.value, e.target.checked);
                }}
              />
              <label htmlFor="desktop">Desktop</label>
            </div>
          </div>
        </section>
        <div>
          <span>Description</span>
          <textarea
            name="description"
            id="description"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div>
          <span>Scope</span>
          <div>
            <input
              type="radio"
              name="scope"
              id="private"
              value="private"
              onChange={(e) => {
                setScope(e.target.value);
              }}
            />
            <label htmlFor="scope">Private</label>
          </div>
          <div>
            <input
              type="radio"
              name="scope"
              id="open-source"
              value="open-source"
              onChange={(e) => {
                setScope(e.target.value);
              }}
            />
            <label htmlFor="scope">Open Source</label>
          </div>
        </div>
      </div>

      <div>
        <footer>
          <div>
            <div id="submit">
              <img src={createsubmit}></img>
              <button type="submit">Ready &amp; Go!</button>
            </div>
          </div>
        </footer>
      </div>
    </FormCreateContainer>
  );
}
