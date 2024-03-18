#include <iostream>

using namespace std;

struct Node
{
	int data;
	Node *next;

	Node(int item)
	{
		data = item;
		next = NULL;
	}
};

void insert(Node **head, int item)
{
	Node *temp = *head;

	//If the list is empty, make the new node the head
	if (temp == NULL)
	{
		*head = new Node(item);
		return;
	}

	while (temp->next != NULL)
		temp = temp->next;

	temp->next = new Node(item);
}

int remove(Node **head, int key)
{
	Node *temp = *head;
	Node *prev = NULL;

	if (temp->data == key)
	{
		//Since the first node is the onde to be removed
		//The head will now be to next one
		*head = temp->next;
		free(temp);
		return 1;
	}

	while (temp != NULL && temp->data != key)
	{
		prev = temp;
		temp = temp->next;
	}

	//If it gets to the end of the list and didn't find the key, it means that it doesn't exists
	if (temp == NULL)
		return -1;

	//When the loop ends, the current node is the one to be deleted;
	//So, the previous node needs the reference to the next node from the current one.
	prev->next = temp->next;

	free(temp);

	return 1;
}

void print(Node **head)
{
	Node *temp = *head;

	while (temp != NULL)
	{
		cout << (temp->data) << endl;
		temp = temp->next;
	}
}

int size(Node **head)
{

	Node *temp = *head;
	int count = 1;

	while (temp->next != NULL)
	{
		count++;
		temp = temp->next;
	}

	return count;
}