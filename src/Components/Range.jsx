import React, { useState } from 'react'

export default function Range({ create }) {

	const [value, setvalue] = useState(221)
	create(value)

	return (
		<div>
			<input
				type="number"
				min="0"
				max="255"
				step="1"
				onChange={event => { setvalue(event.target.value); }}
				value={value}>
			</input>

			<input
				type="range"
				min="0"
				max="255"
				step="1"
				onChange={event => { setvalue(event.target.value); }}
				value={value}>
			</input>
		</div>
	)
}