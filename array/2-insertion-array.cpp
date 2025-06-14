#include <bits/stdc++.h>
using namespace std;

/*
 * Task: Insert a new value into the given array at a specified position.
 */

/* Function to print the array */
void printArray(int array[], int size)
{
    for(int i = 0; i<size; i++)
    {
        cout<<array[i]<<" ";
    }
    cout<<endl;
}

int main()
{
    int array[10];
    int size; 
    cout << "Enter the number of elements (max 10): ";
    cin>>size;

    // Input: Insert array elements from user
    cout << "Insert " << size << " array elements: ";
    for(int i = 0; i<size; i++)
    {
        cin>>array[i];
    }

    // Output: Print the current array
    cout<<"Current array: ";
    printArray(array, size);


    int position, value;

    // Input: Taking insertion position and value
    cout << "Enter the desire position (0 to " << size << "): ";
    cin>>position;
        
    cout << "Enter the value to insert at position " << position << ": ";
    cin>>value;

    // Logic: Insertion process
    if(position < 0 || position>size) {
        cout << "Invalid position. It must be between 0 and " << size << "." << endl;
        return 0;
    }
    else {
        for(int i = size-1; i>=position; i--) {
            array[i+1] = array[i];
        }
        array[position] = value;
        size++;
    }

    // Output: Print the new array after insertion
    cout<<"New array after the insertion: ";
    printArray(array, size);

    return 0;
}