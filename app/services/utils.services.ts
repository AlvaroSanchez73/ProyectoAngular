import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, MatDialog } from '@angular/material';
import { AlertsComponent } from '../components/modals/alerts/alerts.component';


@Injectable()
export class UtilsService {
	
	public progress = false;
	public spinner: boolean = false;
	public sideNav: boolean = false;
	public appNav: boolean = false;
	public horizontalPosition: MatSnackBarHorizontalPosition = 'end';
	public verticalPosition: MatSnackBarVerticalPosition = 'bottom';
	public displayNavbar = false;

	constructor(public snackBar: MatSnackBar, public dialog: MatDialog) {

	}

	showSpinner() {
		this.spinner = true;
	}

	hideSpinner() {
		this.spinner = false;
	}

	showSideNav() {
		this.sideNav = true;
	}

	showAppNav() {
		this.appNav = true;
	}

	hideSideNav() {
		this.sideNav = false;
	}

	hideAppNav() {
		this.appNav = false;
	}

	menuAction() {
		if (this.sideNav) {
			this.sideNav = false;
		} else {
			this.sideNav = true;
		}
		return true;
	}

	menuAppNavAction() {
		if (this.appNav) {
			this.appNav = false;
		} else {
			this.appNav = true;
		}
		return true;
	}

	message(message: string): void {
		this.snackBar.open(message, 'Cerrar', {
			duration: 5000,
			horizontalPosition: this.horizontalPosition,
			verticalPosition: this.verticalPosition,
			panelClass: "my-snackbar"

		});
	}
	mDialog(title: string, message: string, type: string) {
		let dialogConfirm = this.dialog.open(AlertsComponent, {
			width: '400px',
			data: { title: title, message: message, type: type }
		});
		return dialogConfirm.afterClosed();
	}
	numberToBoolean(number) {
		var result = false;
		if (number == "1") {
			result = true;
		}
		return result;
	}
	booleanToNumber(boolean) {
		var result = 0;
		if (boolean) {
			result = 1;
		}
		return result;
	}
	periodoToString(periodoNumbers) {
		var arrayPeriodo = periodoNumbers.split("-");
		var periodo = "Año " + arrayPeriodo[0] + " - Periodo " + arrayPeriodo[1];
		return periodo;
	}
	periodoToNumber(periodoString) {
		var arrayPeriodo = periodoString.split("-")
		var arrayAnio = arrayPeriodo[0].split(" ");
		var arrayTrim = arrayPeriodo[1].split(" ");
		var periodo = arrayAnio[1] + "-" + arrayTrim[2];
		return periodo;
	}
	undefinedToNull(toNull) {
		if (toNull == undefined) {
			toNull = null;
		}
		return toNull;
	}
}
