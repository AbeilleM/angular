class ToDo {
    constructor(id, title, done) {
        this.id = id;
        this.title = title;
        this.done = done;
    }

    check = () => this.done = !this.done;

    addInList() {
        this.li = document.createElement("li");
        this.li.textContent = this.title;

        this.li.addEventListener("click", () => {
            this.check();
            if (this.done) {
                this.li.textContent = this.title + ' -> Fait !';
            } else {
                this.li.textContent = this.title
            }
        });

        return this.li;
    }

}

const td = new ToDo(1, 'Test', false);
td.check();