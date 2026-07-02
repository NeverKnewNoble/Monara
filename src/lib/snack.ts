"use client";
import { useSnackbar, type OptionsObject } from "notistack";

export function useSnack() {
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    return {
        success: (msg: string, opts?: OptionsObject) =>
        enqueueSnackbar(msg, { variant: "success", ...opts }),
        error: (msg: string, opts?: OptionsObject) =>
        enqueueSnackbar(msg, { variant: "error", ...opts }),
        warning: (msg: string, opts?: OptionsObject) =>
        enqueueSnackbar(msg, { variant: "warning", ...opts }),
        info: (msg: string, opts?: OptionsObject) =>
        enqueueSnackbar(msg, { variant: "info", ...opts }),
        close: closeSnackbar,
    };
}