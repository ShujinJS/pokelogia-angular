import { authReducer } from "./auth/auth.reducer";
import { notificationReducer } from "./notification/notification.reducer";
import { themeReducer } from "./theme/theme.reducer";
notificationReducer

export const appReducers = {
    authReducer,
    themeReducer,
    notificationReducer,
}