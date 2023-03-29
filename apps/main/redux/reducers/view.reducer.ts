export interface ViewState {
	show_search_popup: boolean
	show_side_nav: boolean
}

const initialState: ViewState = {
	show_search_popup: false,
	show_side_nav: true,
}

export default (
	state = initialState,
	{ type, payload }: { type: string; payload: any }
) => {
	switch (type) {
		case 'SET_VIEW_STATE':
			return { ...state, ...payload }
		case 'TOGGLE_SIDE_NAV':
			return {
				...state,
				show_side_nav: payload.show_side_nav,
			}

		default:
			return state
	}
}
