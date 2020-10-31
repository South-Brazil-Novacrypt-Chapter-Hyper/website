import React from 'react';

import {
    FormCreateContainer
} from './styles';

import createsubmit from '../../global/assets/icons/createsubmit.svg'

export default function FormCreate() {
    return (
        <FormCreateContainer>
            <div>
                <div>
                    <span>Project Name</span>
                    <input type="text" />
                </div>
                <section>
                    <span>Platform</span>
                    <div>
                        <div>
                            <input type="checkbox" name='check' />
                            <label>Web</label>
                        </div>
                        <div>
                            <input type="checkbox" name='check' />
                            <label>Mobile</label>
                        </div>
                        <div>
                            <input type="checkbox" name='check' />
                            <label>Desktop</label>
                        </div>
                    </div>
                </section>
                <div>
                    <span>Description</span>
                    <textarea></textarea>
                </div>
            </div>
            <div>
                <p>Scope</p>
                <footer>
                    <span></span>
                    <div>
                        <img src={createsubmit}></img>
                    </div>
                </footer>
            </div>
        </FormCreateContainer>
    )
}
