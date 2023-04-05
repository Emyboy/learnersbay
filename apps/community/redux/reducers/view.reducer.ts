export interface ViewState {
	show_search_popup: boolean
	show_side_nav: boolean
	connection_lost: boolean
	app_loading: boolean
}

const initialState: ViewState = {
	show_search_popup: false,
	show_side_nav: true,
	connection_lost: false,
	app_loading: true,
}

export default (
	state = initialState,
	{ type, payload }: { type: string; payload: any }
) => {
	switch (type) {
		case 'SET_VIEW_STATE':
			return { ...state, ...payload }

		default:
			return state
	}
}
