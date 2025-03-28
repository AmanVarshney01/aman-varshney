---
title: 'How to Implement a Queue from Scratch in C++'
pubDate: "Dec 16 2023"
---

> **Note:** This is an AI-generated sample post used to test the blog functionality in Astro. Real, original content will be added later.

## Introduction

A queue is a data structure that stores items in a First In First Out (FIFO) manner. This means that the first item to be inserted into the queue is the first one to be removed.

we can implement a queue using an array or a linked list. In this article, we will implement a queue using a linked list.

we will use the concepts of templates, pointers, and object-oriented programming.

## Queue Operations

- Enqueue: Adds an item to the queue.
- Dequeue: Removes an item from the queue.
- Peek: Returns the front item of the queue without removing it.
- IsEmpty: Checks if the queue is empty.

## Queue Implementation

we will start by defining all the methods and variables that we will need in our queue class.

```cpp
template <typename T> // T The type of elements stored in the Queue.
class Queue {

private:

    struct Node {
        T value; // Value of the node
        Node* next; // Pointer to the next node

        Node() {

        }
    };

    Node* head; // Pointer to the first node in the queue
    Node* tail; // Pointer to the last node in the queue

public:

    int length; // Number of elements in the queue

    Queue() {

    }

    void enqueue(T value) {

    }

    T dequeue() {

    }

    T peek() {

    }
};

int main () {

    // Queue q;

    return 0;
}

```

### Queue class

The Queue class has two private pointers, head and tail, which point to the first and last nodes in the queue respectively.
It also has a public integer length which keeps track of the number of elements in the queue.
To make the queue generic, we will use templates.

```cpp
Queue() {
    this->head = nullptr;
    this->tail = nullptr;
    this->length = 0;
}
```

The constructor initializes an empty queue. head and tail are set to nullptr and length is set to 0.

### Node Structure

The Queue is implemented using a linked list.
Each node in the list contains a value of a generic type T and a pointer to the next node.
The Node structure is defined within the Queue class and is private,
meaning it can only be accessed by members of the Queue class.

```cpp
struct Node {
    T value;
    Node* next;

    Node( T value, Node* next = nullptr) {
        this->value = value;
        this->next = next;
    }
};
```

Node constructor takes two arguments, the value of the node and a pointer to the next node.
The default value of the next pointer is nullptr. Sets the value and next variables to the passed arguments.

### Enqueue

This function adds an element to the end of the queue.
If the queue is empty, a new node is created and both head and tail point to it.
If the queue is not empty, a new node is created and added to the end of the queue,
and tail is updated to point to this new node.
The length is incremented by 1.

```cpp
void enqueue(T item) {
    // If the queue is empty, create a new node and set head and tail to it
    if (!this->tail) {
        this->tail = new Node(item);
        this->head = this->tail;
    }
    // If the queue is not empty, create a new node and add it to the end of the queue
    else {
        this->tail->next = new Node(item);
        this->tail = this->tail->next;
    }

    this->length++;
}
```

### Dequeue

This function removes an element from the front of the queue. If the queue is empty,
it returns a default-constructed value of type T. If the queue is not empty,
it saves the value of the head node, updates head to point to the next node,
deletes the old head node, and decrements length by 1.
If the queue becomes empty after the dequeue operation, tail is also set to nullptr.

```cpp
T dequeue() {
    if (!this->head) {
        return T(); // Return default-constructed value if queue is empty
    }

    this->length--;

    Node* previousHead = this->head;
    this->head = this->head->next;

    previousHead->next = nullptr;

    T previousValue = previousHead->value;
    delete previousHead;

    if (this->length == 0) {
        delete this->tail;
        this->tail = nullptr;
    }

    return previousValue;
}
```

### Peek

This function returns the value of the front element without removing it.
If the queue is empty, it returns a default-constructed value of type T.

```cpp
T peek() {
    if (this->head) { // If the queue is not empty
        return this->head->value; // Return the value of the head node
    }
    return T(); // Return default-constructed value if queue is empty
}
```

### IsEmpty

This function checks if the queue is empty. It returns true if length is 0, and false otherwise.

```cpp
bool isEmpty() {
    return this->length == 0;
}
```

### Full Code

```cpp
#include <iostream>

template <typename T>
class Queue {

private:

	struct Node {
		T value;
		Node* next;

		Node(T value, Node* next = nullptr) {
			this->value = value;
			this->next = next;
		}

	};

	Node* head;
	Node* tail;

public:

	int length;

	Queue() {
		this->head = nullptr;
		this->tail = nullptr;
		this->length = 0;
	}

	void enqueue(T item) {
		if (!this->tail) {
			this->tail = new Node(item);
			this->head = this->tail;
		}
		else {
			this->tail->next = new Node(item);
			this->tail = this->tail->next;
		}

		this->length++;
	}

	T dequeue() {
		if (!this->head) {
			return T();
		}

		this->length--;

		Node* previousHead = this->head;
		this->head = this->head->next;

		previousHead->next = nullptr;

		T previousValue = previousHead->value;
		delete previousHead;

		if (this->length == 0) {
			delete this->tail;
			this->tail = nullptr;
		}

		return previousValue;

	}

	T peek() {
		if (this->head) {
			return this->head->value;
		}
		return T();
	}

	bool isEmpty() {
		return this->length == 0;
	}

};

int main() {

	Queue<int> q;

    std::cout << q.isEmpty() << '\n'; // 1
	q.enqueue(7);
	q.enqueue(3);
	q.enqueue(6);
	q.enqueue(0);
	std::cout << q.peek() << '\n'; // 7
	std::cout << q.dequeue() << '\n'; // 7
	std::cout << q.peek() << '\n'; // 3
	std::cout << q.length << '\n'; // 3
	std::cout << q.isEmpty() << '\n'; // 0

	return 0;
}
```
