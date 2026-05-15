#include <bits/stdc++.h>
using namespace std;

/*
 * Task: Update an existing element in the array with a new value at a specified index.
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

    // Print the current array
    cout<<"Current array: ";
    printArray(array, size);


    int index, value;

    // Taking the index and value
    cout << "Enter the desire index (0 to " << size-1 << "): ";
    cin>>index;
        
    cout << "Enter the value to insert at position " << index << ": ";
    cin>>value;

    // Checking the valid index or not
    if(index < 0 || index>=size) {
        cout << "Invalid index. It must be between 0 and " << size-1 << "." << endl;
        return 0;
    }
    
    array[index] = value;

    // Print the new array after insertion
    cout<<"New array after the insertion: ";
    printArray(array, size);

    return 0;
}