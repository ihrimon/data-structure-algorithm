#include <iostream>
using namespace std;

/* Node class to represent a node of the linked list. */
class Node {
public:
    int data;
    Node* next;

    // initialize a new node
    Node(int new_data) {
        data = new_data;
        next = nullptr;
    }
};

// appends a new node at the end and returns the head.
Node* append(Node* head, int new_data) {
  
    // Create a new node
    Node* new_node = new Node(new_data);

    // If the Linked List is empty, make
    // the new node as the head and return
    if (head == nullptr) {
        return new_node;
    }

    // Store the head reference in a temporary variable
    Node* tail_node = head;

    // Traverse till the last node
    while (tail_node->next != nullptr) {
        tail_node = tail_node->next;
    }

    // Change the next pointer of the last node 
    // to point to the new node
    tail_node->next = new_node;

    // Return the head of the list
    return head;
}

// Function to print the linked list.
void printList(Node* node) {
    while (node != nullptr) {
        cout << " " << node->data;
        node = node->next;
    }
}

// Driver code
int main() {
  
    Node* head = new Node(1);
    head->next = new Node(2);
    head->next->next = new Node(3);
    head->next->next->next = new Node(4);
    head->next->next->next->next = new Node(5);

    cout << "Created Linked list is:";
    printList(head);

    // Example of appending a node at the end
    head = append(head, 0);

    // after inserting 0 at the end
    cout << "\nAfter inserting 0 at the end:";
    printList(head);

    return 0;
}