#include <bits/stdc++.h>
using namespace std;

/*
 * Task: Bubble sort in array (ascending order).
 */

void insertionSort(int array[], int size)
{
    for(int i = 0; i<size-1; i++)
    {
        bool isSorted = true;

        for(int j = 0; j<size-1-i; j++)
        {
            if(array[j]>array[j+1])
            {
                int temp = array[j];
                array[j] = array[j+1];
                array[j + 1] = temp;
                
                isSorted = false;
            }
        }
        // Array is already sorted
        if(isSorted) break;
    }

}

/* Print all elements of the array */
void printArray(int array[], int size)
{
    for(int i = 0; i<size; i++)
    {
        cout<<array[i]<< " ";
    }
    cout<<endl;
}

int main()
{
    int array[10], size;

    cout << "Enter the number of elements (max 10): ";
    cin>>size;

    // Input: Insert array elements from user
    cout << "Insert " << size << " array elements: ";
    for(int i = 0; i<size; i++)
    {
        cin>>array[i];
    }

     // Sort the array using Bubble Sort
    insertionSort(array, size);

    // Output: Sorted array
    cout<<"Sorted array: ";
    printArray(array, size);

    return 0;
}