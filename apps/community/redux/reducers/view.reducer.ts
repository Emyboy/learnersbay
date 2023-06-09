export interface ViewState {
	show_search_popup: boolean
	// show_side_nav: boolean
	connected: boolean
	app_loading: boolean
	show_right_panel: boolean
}

const initialState: ViewState = {
	show_search_popup: false,
	// show_side_nav: true,
	connected: false,
	app_loading: true,
	show_right_panel: false
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
