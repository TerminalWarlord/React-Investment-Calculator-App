export default function UserInput({ userInput, onInputChange }) {
    return <div id="user-input">
        <div className="input-group">
            <div>
                <label>Initial Investment</label>
                <input type="number" value={userInput.initialInvestment} onChange={(e) => onInputChange('initialInvestment', e)} />
            </div>

            <div>
                <label>Annual Investment</label>
                <input type="number" value={userInput.annualInvestment} onChange={(e) => onInputChange('annualInvestment', e)} />
            </div>
        </div><br />
        <div className="input-group">
            <div>
                <label>Expected Return</label>
                <input type="number" value={userInput.expectedReturn} onChange={(e) => onInputChange('expectedReturn', e)} />
            </div>

            <div>
                <label>Duration</label>
                <input type="number" value={userInput.duration} onChange={(e) => onInputChange('duration', e)} />
            </div>
        </div><br />
    </div>
}