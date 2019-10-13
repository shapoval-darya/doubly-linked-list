const Node = require('./node');
class LinkedList {
    constructor() {
        this._list = [];
    }

    append(data) {
        this._list.push(new Node(data));
        return this;
    }


    get length() {
        return this._list.length;
    }

    get _tail() {
        return this._list[this._list.length - 1];
    }

    get _head() {
        return this._list[0];
    }

    head() {
        return this._list[0] ? this._list[0].data : null;
    }

    tail() {
        return this._list[this._list.length - 1] ? this._list[this._list.length - 1].data : null;
    }

    at(index) {
        return this._list[index].data;
    }

    insertAt(index, data) {
        this._list.splice(index, 0, new Node(data));
        return this;
    }

    isEmpty() {
        return this._list.length === 0;
    }

    clear() {
        this._list.length = 0;
        return this;
    }

    deleteAt(index) {
        this._list.splice(index, 1);
        return this;
    }

    reverse() {
        this._list.reverse();
        return this;
    }

    indexOf(data) {
        for (const node of this._list) {
            if (node.data === data) {
                return this._list.indexOf(node);
            }
        }
        return -1;
    }
}

module.exports = LinkedList;