import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const fakerDate = faker.date.past();
console.log(fakerDate);

const App = () => {
    return (
        <div className="ui container comments">

            <ApprovalCard>
                <CommentDetail
                    image={faker.image.avatar()}
                    author={faker.name.firstName()}
                    time="11.10 AM"
                    content={faker.lorem.sentence()}
                />
            </ApprovalCard>
            
            <ApprovalCard>
                <CommentDetail 
                    image={faker.image.avatar()}
                    author={faker.name.firstName()}
                    time="12.53 AM"
                    content={faker.lorem.sentence()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    image={faker.image.avatar()}
                    author={faker.name.firstName()}
                    time="1.23 pM"
                    content={faker.lorem.sentence()}
                />
            </ApprovalCard>

            

            

        </div>
    )
};

ReactDOM.render(<App />, document.querySelector('#root'))