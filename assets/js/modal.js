export class Modal {
    constructor() {
        const modal = document.getElementById('modal');

        modal.style.display = 'block';

        this.availW = window.innerWidth;
        this.availH = window.innerHeight;
        this.modal = modal;
        this.modalStyle = modal.style;
        this.modalW = modal.offsetWidth;
        this.modalH = modal.offsetHeight;

        modal.style.display = 'none';
    }

    openModal(event) {
        const clientX = event.clientX;
        const clientY = event.clientY;

        event.preventDefault();

        // Entra
        if ((clientX + this.modalW) < this.availW && (clientY + this.modalH) < this.availH) {
            this.modalStyle.left = clientX + 'px';
            this.modalStyle.top = clientY + 'px';
        }
        // No entra
        else if ((clientX + this.modalW) > this.availW && (clientY + this.modalH) > this.availH) {
            this.modalStyle.left = (this.availW - this.modalW) + 'px';
            this.modalStyle.top = (this.availH - this.modalH) + 'px';
        }
        // Alguno de los 2
        else {
            if ((clientX + this.modalW) > this.availW) {
                this.modalStyle.left = (this.availW - this.modalW) + 'px';
                this.modalStyle.top = clientY + 'px';
            }
            if ((clientY + this.modalH) > this.availH) {
                this.modalStyle.left = clientX + 'px';
                this.modalStyle.top = (this.availH - this.modalH) + 'px';
            }
        }

        this.modalStyle.display = 'block';
    }

    closeModal() {
        if (this.modalStyle.display == 'block') {
            this.modalStyle.display = 'none';
        }
    }
}