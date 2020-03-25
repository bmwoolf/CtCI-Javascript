// divide linked list into two lists that are either less than the node or greater than/equal to the node- node will be on the right side

// stable method- meaning we keep the order of the nodes intact

const LinkedList = function (value, number) {
    this.value = value;
    this.number = number;
    this.next = null;
};

function partitionStable (node, x) {
    let beforeStart = null;
    let beforeEnd = null;
    let afterStart = null;
    let afterEnd = null;

    while (node !== null) {
        let next = node.next;
        node.next = null;
        // insert into before list
        if (node.value < x) {
            if (beforeStart === null) {
                beforeStart = node;
                beforeEnd = beforeStart;
            } else {
                beforeEnd.next = node;
                beforeEnd = node;
            }
        } 
        // insert into afterlist
        else {
            if (afterStart === null) {
                afterStart = node;
                afterEnd = afterStart;
            } else {
                afterEnd.next = node;
                afterEnd = node;
            }
        }
    }

    if (beforeStart === null) {
        return afterStart;
    }

    beforeEnd.next = afterStart;
    return beforeStart;
}