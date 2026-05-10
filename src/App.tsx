import { useState } from 'react'
import './App.css'

interface Question {
  id: number;
  question: string;
  answer: string;
  codeExample?: string;
}

function App() {
  const [activeId, setActiveId] = useState<number | null>(null);

  const questions: Question[] = [
    {
      id: 1,
      question: "1. Define data communication and explain its components.",
      answer: "",
      codeExample: `
1️⃣ Definition of Data Communication

Data Communication means transferring data (information) from one device to another device through a 
communication medium like cable, wireless, or network.

👉 In simple words:
Data communication is the process of sending and receiving data between two or more devices.

📌 Example:

Sending email
Chatting on WhatsApp
Opening a website
Transferring a file between computers

All these use data communication.



Components of Data Communication

  There are 5 main components of data communication.


1️⃣ Sender (Source)

The sender is the device that sends the data.

📌 Example

Computer
Mobile phone
Laptop

Example: When you send a message, your phone is the sender.



2️⃣ Receiver (Destination)

The receiver is the device that receives the data.

📌 Example

Another computer
Mobile phone
Server

Example: When your friend receives your message, their phone is the receiver.



3️⃣ Message (Data)

The message is the information that is sent from sender to receiver.

📌 Examples of message:

Text
Image
Video
Audio
File

Example: A WhatsApp message or email is the message.



4️⃣ Transmission Medium

The transmission medium is the path through which data travels.

📌 Types of medium:

Twisted pair cable
Coaxial cable
Optical fiber
Wireless (WiFi, radio waves)

Example: WiFi or Internet cable.



5️⃣ Protocol

A protocol is a set of rules that control data communication.

It tells:

How data is sent
How data is received
How errors are handled

📌 Examples of protocols:

HTTP
TCP
IP
FTP

Example: When you open a website, HTTP protocol is used.



📊 Diagram (for exam)

Sender  →  Transmission Medium  →  Receiver
   |             |                   |
 Message ------ Protocol Rules ------



⭐ Short Exam Answer (4–5 lines)

Data Communication is the process of transmitting data between two or more devices through a 
communication medium such as cables or wireless networks.


Components of Data Communication:

  1. Sender – device that sends data
  2. Receiver – device that receives data
  3. Message – information being sent
  4. Transmission Medium – path used to send data
  5. Protocol – rules that control communication
      
      `
    },
    {
      id: 2,
      question: "2. differentiate between analog signals and digital signal",
      answer: "",
      codeExample: `
| Analog Signal                                                         | Digital Signal                                                              |
| ----------------------------------------------------------------------| ----------------------------------------------------------------------------|
| Analog signal is a continuous signal that changes smoothly over time. | Digital signal is a discrete signal that represents data using 0 and 1.     |
| It has a smooth waveform.                                             | It has a square waveform.                                                   |
| It can have infinite values in a range.                               | It has limited values (0 and 1).                                            |
| It is more affected by noise and interference.                        | It is less affected by noise.                                               |
| It is less reliable due to noise.                                     | It is more reliable and accurate.                                           |
| Example: Human voice, radio signals.                                  | Example: Computer data, internet signals.                                   |


Short Answer (for writing in exam)

Analog signal is a continuous signal that changes smoothly over time.
Digital signal is a discrete signal that represents data using binary values (0 and 1).
      `
    },
    {
      id: 3,
      question: "3. Explain the concept of multiplexing and list its types.",
      answer: "",
      codeExample: `
Multiplexing (Simple Meaning)

Multiplexing means sending many signals using one communication line.

👉 In simple words:
  
  Many devices share one channel to send data.

Example

Think about a highway.

  Many cars travel on one road.
  Same way, many data signals travel on one cable/network.

So this process is called Multiplexing.


How it works

1️⃣ At the sender, signals are combined by a device called Multiplexer (MUX).
2️⃣ Data travels through one channel.
3️⃣ At the receiver, signals are separated by Demultiplexer (DEMUX).


Simple idea:

Signal1 \\
Signal2  >  MUX  →  One Channel  →  DEMUX  → Separate Signals
Signal3 /


Types of Multiplexing


1️⃣ Frequency Division Multiplexing (FDM)

In FDM, different signals use different frequencies.

Example:

📻 Radio stations

Radio 1 → 90 MHz
Radio 2 → 94 MHz
Radio 3 → 98 MHz

All use same air, but different frequencies.


2️⃣ Time Division Multiplexing (TDM)

In TDM, signals use the same channel but at different times.

Example:

Time1 → User A data
Time2 → User B data
Time3 → User C data

Like taking turns.


3️⃣ Wavelength Division Multiplexing (WDM)

Used in optical fiber.
Different signals use different light wavelengths.
Example: Internet in fiber cables.


4️⃣ Orthogonal Frequency Division Multiplexing (OFDM)

Used in modern wireless networks.

Example:

WiFi
4G / 5G
Digital TV



Very Short Exam Answer (Write This)

Multiplexing is a technique that allows multiple signals to be transmitted through a single communication 
channel. A Multiplexer (MUX) combines the signals at the sender and a Demultiplexer (DEMUX) separates 
them at the receiver.


Types of Multiplexing:

  Frequency Division Multiplexing (FDM)
  Time Division Multiplexing (TDM)
  Wavelength Division Multiplexing (WDM)
  Orthogonal Frequency Division Multiplexing (OFDM)
      
      
      `
    },
    {
      id: 4,
      question: "4. Define bandwidth and frequency with suitable examples.",
      answer: "",
      codeExample: `
Frequency

Frequency is the number of times a signal repeats (cycles) in one second.

It shows how fast a signal changes.
Unit of frequency is Hertz (Hz).

Example

If a signal repeats 100 times in one second, the frequency is 100 Hz.
Radio stations use different frequencies (like 90 MHz, 94 MHz).



Bandwidth

Bandwidth is the range of frequencies that a communication channel can carry.

In simple words:
It is the difference between highest frequency and lowest frequency.


Formula

Bandwidth = Highest Frequency − Lowest Frequency


Example

If a channel can transmit signals from 1000 Hz to 5000 Hz

Bandwidth = 5000 − 1000
Bandwidth = 4000 Hz

Example:

  Internet connection bandwidth
  TV channels transmission



Short Exam Answer

Frequency is the number of cycles of a signal per second and is measured in Hertz (Hz).
Example: A signal repeating 100 times per second has a frequency of 100 Hz.

Bandwidth is the range of frequencies that a communication channel can transmit.
Example: If a channel transmits from 1000 Hz to 5000 Hz, the bandwidth is 4000 Hz.
      `
    },
    {
      id: 5,
      question: "5. List different types of transmission media used in networks.",
      answer: "",
      codeExample: `
Types of Transmission Media Used in Networks

Transmission media is the path or channel through which data travels from sender to receiver.

Example: cables or wireless signals used to send data.



Types of Transmission Media

There are two main types:


1️⃣ Guided Media (Wired)

In this type, data travels through physical cables.

Types:

• Twisted Pair Cable

Two copper wires twisted together
Used in telephone lines and LAN

Example: Internet cables in homes.


• Coaxial Cable

Thick cable with copper core
Used in cable TV and internet

Example: Cable TV connection.


• Optical Fiber Cable

Uses light signals to transmit data
Very fast and long-distance communication

Example: High-speed internet networks.



2️⃣ Unguided Media (Wireless)

In this type, data travels through air (no cables).

Types:


• Radio Waves

Used in radio broadcasting and WiFi


• Microwaves

Used in satellite communication and mobile networks


• Infrared

Used for short distance communication

Example: TV remote control.




Short Exam Answer

Transmission media is the path through which data is transmitted between devices in a network.

Types of transmission media:

Guided Media (Wired)

Twisted Pair Cable
Coaxial Cable
Optical Fiber

Unguided Media (Wireless)

Radio Waves
Microwaves
Infrared
      
      `
    },
    {
      id: 6,
      question: "6.What is circuit switching? give one real-time example. ",
      answer: "",
      codeExample: `
Circuit Switching

Circuit Switching is a communication method in which a dedicated path (connection) is established 
between sender and receiver before data transmission starts.

This path remains reserved for the entire communication until the communication ends.


👉 In simple words:
A direct connection is created between two devices and stays active during the whole communication.



Example (Real-time)

📞 Telephone Call

When you make a phone call:

  1. A direct connection (circuit) is established between two phones.
  2. The connection stays active during the whole call.
  3. After the call ends, the connection is released.

This is an example of circuit switching.



Short Exam Answer

Circuit Switching is a communication technique in which a dedicated communication path is established 
between sender and receiver before data transmission and remains active until the communication ends.

Example:
A telephone call is a real-time example of circuit switching.
      
      `
    },
    {
      id: 7,
      question: "7. Define framing in the Data Link Layer.",
      answer: "",
      codeExample: `
Framing in Data Link Layer

Framing is the process of dividing the data into small units called frames before transmission over the 
network.

In the Data Link Layer, data received from the Network Layer is broken into frames so that it can be 
transmitted properly.

👉 In simple words:
Framing means converting data into frames (small blocks) for transmission.


Why Framing is Needed

To organize data properly
To detect errors
To identify the start and end of data



Example

Suppose a message is:

HELLO WORLD


The Data Link Layer may divide it into frames like:

Frame1 → HEL
Frame2 → LO 
Frame3 → WOR
Frame4 → LD

These frames are sent one by one through the network.


Short Exam Answer

Framing is a process in the Data Link Layer in which data received from the Network Layer is divided into 
smaller units called frames for transmission.

It helps in proper data transfer and error detection.
      
      
      `
    },
    {
      id: 8,
      question: "8. What is error detection in data communication?",
      answer: "",
      codeExample: `
What is “Transmitted”?

Transmitted means sent from one device to another device.

Example:

  When you send a WhatsApp message, the message is transmitted from your phone to your friend’s 
  phone.

So:

Transmission = Sending data



Error Detection (Very Simple Meaning)

Error detection means checking whether the data changed while sending.

Sometimes when data is transmitted (sent) through network, it may change because of noise or signal 
problems.

So the receiver checks the data to see if there is an error.


Simple Example

Sender sends data:

  1011

But receiver gets:

  1001


The data changed during transmission.

So the system detects an error.
This process is called Error Detection.


Why Error Detection is Used

To check if data is correct
To detect mistakes in data
To ensure reliable communication


Short Exam Answer (Write This)

Error detection is the process of identifying errors in data during transmission from sender to receiver.
Errors may occur due to noise or interference in the communication channel.
It helps to check whether the received data is correct or not.
      
      `
    },
    {
      id: 9,
      question: "9. Define CSMA/CD protocol.",
      answer: "",
      codeExample: `
CSMA/CD Protocol

CSMA/CD stands for Carrier Sense Multiple Access with Collision Detection.

It is a protocol used in computer networks (especially Ethernet) to control how devices share the 
communication channel.


👉 In simple words:

Before sending data, a device checks whether the channel is free or busy.
If the channel is free, it sends the data.
If two devices send data at the same time, a collision occurs, and the devices stop and send data again 
later.


How CSMA/CD Works

1️⃣ A device listens to the channel (carrier sense).
2️⃣ If the channel is free, it sends the data.
3️⃣ If two devices send data at the same time, a collision occurs.
4️⃣ The devices detect the collision and stop sending.
5️⃣ After some time, they send the data again.


Example

In a LAN network, many computers share the same cable.

  Computer A checks the cable → free → sends data.
  Computer B also sends data at the same time → collision occurs.
  Both computers stop and try again later.



Short Exam Answer

CSMA/CD (Carrier Sense Multiple Access with Collision Detection) is a network protocol used in Ethernet 
networks.

It allows multiple devices to share the same communication channel by checking if the channel is free 
before transmitting data and detecting collisions during transmission.
      
      `
    },
    {
      id: 10,
      question: "10. What is packet switching and where is it used?",
      answer: "",
      codeExample: `
Packet Switching

Packet Switching is a communication method in which data is divided into small parts called packets 
before transmission.

Each packet travels separately through the network and is reassembled at the receiver to form the original 
message.

👉 In simple words:
A large message is broken into small packets and sent through the network.


Example

Suppose you send a message:

HELLO


It may be divided like this:

Packet1 → HE  
Packet2 → LL  
Packet3 → O

These packets travel through the network and are combined again at the receiver.


Where Packet Switching is Used

Packet switching is mainly used in:

Internet
Email services
Web browsing
Online messaging (WhatsApp, chat apps)



Short Exam Answer

Packet switching is a data communication method in which data is divided into small packets and 
transmitted separately through the network.
At the receiver, the packets are reassembled to form the original message.
      
      `
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 8888,
      question: "Mid Paper.",
      answer: "",
      codeExample: `
=========================================
DATA COMMUNICATION & NETWORKING
(EASY + DETAILED ANSWERS)
=========================================


-----------------------------------------
Q1 (a) (i)
Define Port and write port number of FTP
-----------------------------------------

Answer:
A port is a number used to identify a specific
service or application running on a computer.

Just like a house has different rooms,
a computer has different ports for different services.

Example:
HTTP → Port 80
FTP → Port 21

So,
FTP Port Number = 21


-----------------------------------------
Q1 (a) (ii)
What is HTTP?
-----------------------------------------

Answer:
HTTP (HyperText Transfer Protocol) is a protocol
used to load web pages on the internet.

When you open a website in browser,
HTTP helps send request and receive data.

Example:
When you open Google, HTTP is used.


-----------------------------------------
Q1 (a) (iii)
Define Flow Control
-----------------------------------------

Answer:
Flow control is used to control the speed of
data transmission between sender and receiver.

If sender sends data too fast,
receiver may get overloaded.

So flow control keeps balance.


-----------------------------------------
Q1 (b) MCQ Explanation
-----------------------------------------

1. Application Layer:
Because it directly interacts with user.

2. TCP is reliable:
Because it checks errors and ensures delivery.

3. Presentation Layer:
Handles encryption and compression.

4. Flow control prevents:
Network overload.

5. Congestion control:
Prevents network overload.

6. HTTP:
Used to open web pages.

7. Full Duplex:
Data flows both directions at same time.


-----------------------------------------
Q2 (a) (i)
Circuit Switching vs Packet Switching
-----------------------------------------

Circuit Switching:

- A fixed path is created before communication
- Data flows continuously
- Example: Telephone call

Packet Switching:

- Data is divided into small packets
- Each packet travels separately
- Example: Internet

Easy idea:
Circuit = One fixed road
Packet = Many different roads


-----------------------------------------
Q2 (a) (ii)
TCP Three-Way Handshake
-----------------------------------------

Answer:

This is a process to establish connection
between client and server.

Steps:

1. SYN:
Client says → "Can I connect?"

2. SYN-ACK:
Server replies → "Yes, I am ready"

3. ACK:
Client says → "OK, let's start"

Now connection is established.


-----------------------------------------
Q2 (b) (i)
Multiplexing with types
-----------------------------------------

Answer:

Multiplexing means combining many signals
into one channel to save bandwidth.

Types:

1. FDM:
Different frequencies used

2. TDM:
Different time slots used

3. WDM:
Used in optical fiber


-----------------------------------------
Q2 (b) (ii)
Packet Switching (Easy Explanation)
-----------------------------------------

Answer:

In packet switching:

- Data is broken into small packets
- Each packet travels separately
- At destination, packets are combined

Advantage:
Fast and efficient

Example:
Sending WhatsApp messages


-----------------------------------------
Q3 (i)
Which is better? (Circuit vs Packet)
-----------------------------------------

Answer:

Packet Switching is better because:

1. Uses bandwidth efficiently
2. No need of fixed path
3. Can handle many users
4. More reliable

So modern internet uses packet switching.


-----------------------------------------
Q3 (ii)
FTP works but HTTP not working
-----------------------------------------

Answer:

Possible reasons:

1. Port 80 blocked
2. Website server down
3. DNS problem
4. Firewall blocking HTTP
5. Browser issue

Meaning:
File transfer works but web access fails.


-----------------------------------------
Q3 (iii)
HTTP vs FTP (Large Files)
-----------------------------------------

Answer:

HTTP:
- Used for web browsing
- Not good for large files

FTP:
- Designed for file transfer
- Supports large files easily

Conclusion:
FTP is better for large files.



-----------------------------------------
Q4 (a)
Congestion Control in Streaming
-----------------------------------------

Answer:

When many users use internet,
network becomes slow → buffering happens.

Congestion control helps by:

1. Reducing data speed
2. Avoiding packet loss
3. Managing traffic

Result:
Video runs smoothly.



-----------------------------------------
Q4 (b)
Role of DNS and failure
-----------------------------------------

Answer:

DNS converts website name into IP address.

Example:
google.com → IP address

Role:
Helps us access websites easily.

If DNS fails:

1. Website will not open
2. Internet feels slow
3. Error messages appear


-----------------------------------------


OR

-----------------------------------------

Application Layer Protocols
-----------------------------------------

Answer:

Application layer provides services to users.

Examples:

HTTP → Web browsing  
FTP → File transfer  
SMTP → Email  

Importance:

1. Helps communication
2. Used by users directly
3. Enables internet services
      
      `
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1.1,
      question: "1. Character Count Method",
      answer: "",
      codeExample: `
#include <stdio.h>
#include <string.h>

int main()
{
    char data[100];
    int length;

    // Accept the data from the user
    printf("Enter the data: ");
    scanf("%s", data);

    // Calculate the length of the data
    length = strlen(data);

    // Display the frame using character count
    printf("Frame to be transmitted:\n");

    // First element is the count
    printf("%d ", length);

    // Display the characters
    for(int i = 0; i < length; i++)
    {
        printf("%c ", data[i]);
    }

    printf("\n");

    return 0;
}




Output
Enter the data: HELLO
Frame to be transmitted:
5 H E L L O

      `
    },
    {
      id: 2.2,
      question: "2. TCP Client – Server Communication",
      answer: "",
      codeExample: `
#include <stdio.h>
#include <string.h>
#include <sys/socket.h>
#include <arpa/inet.h>
#include <unistd.h>

int main()
{
    int server_fd, new_socket;
    struct sockaddr_in address;
    char buffer[1024] = {0};
    char message[] = "Hello from Server";

    // Create socket
    server_fd = socket(AF_INET, SOCK_STREAM, 0);

    // Define address
    address.sin_family = AF_INET;
    address.sin_addr.s_addr = INADDR_ANY;
    address.sin_port = htons(8080);

    // Bind socket
    bind(server_fd, (struct sockaddr *)&address, sizeof(address));

    // Listen for connections
    listen(server_fd, 3);

    printf("Server waiting for connection...\n");

    // Accept connection
    new_socket = accept(server_fd, NULL, NULL);

    // Read message from client
    read(new_socket, buffer, 1024);
    printf("Message from client: %s\n", buffer);

    // Send reply
    send(new_socket, message, strlen(message), 0);

    close(new_socket);
    close(server_fd);

    return 0;
}

TCP Client Code
#include <stdio.h>
#include <string.h>
#include <sys/socket.h>
#include <arpa/inet.h>
#include <unistd.h>

int main()
{
    int sock;
    struct sockaddr_in serv_addr;
    char message[] = "Hello Server";
    char buffer[1024] = {0};

    // Create socket
    sock = socket(AF_INET, SOCK_STREAM, 0);

    serv_addr.sin_family = AF_INET;
    serv_addr.sin_port = htons(8080);

    // Convert IP address
    inet_pton(AF_INET, "127.0.0.1", &serv_addr.sin_addr);

    // Connect to server
    connect(sock, (struct sockaddr *)&serv_addr, sizeof(serv_addr));

    // Send message
    send(sock, message, strlen(message), 0);

    // Receive reply
    read(sock, buffer, 1024);

    printf("Message from server: %s\n", buffer);

    close(sock);

    return 0;
}



Output
Server Side
Server waiting for connection...
Message from client: Hello Server
Client Side
Message from server: Hello from Server

      `
    },
    {
      id: 3.3,
      question: "3. UDP Client – Server Communication",
      answer: "",
      codeExample: `
#include <stdio.h>
#include <string.h>
#include <sys/socket.h>
#include <arpa/inet.h>

int main()
{
    int sockfd;
    struct sockaddr_in server, client;
    char buffer[1024];
    socklen_t len;

    sockfd = socket(AF_INET, SOCK_DGRAM, 0);

    server.sin_family = AF_INET;
    server.sin_addr.s_addr = INADDR_ANY;
    server.sin_port = htons(8080);

    bind(sockfd, (struct sockaddr *)&server, sizeof(server));

    printf("UDP Server waiting...\n");

    len = sizeof(client);

    recvfrom(sockfd, buffer, 1024, 0, (struct sockaddr *)&client, &len);

    printf("Message from client: %s\n", buffer);

    char reply[] = "Hello from UDP Server";

    sendto(sockfd, reply, strlen(reply), 0, (struct sockaddr *)&client, len);

    return 0;
}

UDP Client Code
#include <stdio.h>
#include <string.h>
#include <sys/socket.h>
#include <arpa/inet.h>

int main()
{
    int sockfd;
    struct sockaddr_in server;
    char message[] = "Hello UDP Server";
    char buffer[1024];
    socklen_t len;

    sockfd = socket(AF_INET, SOCK_DGRAM, 0);

    server.sin_family = AF_INET;
    server.sin_port = htons(8080);
    server.sin_addr.s_addr = inet_addr("127.0.0.1");

    sendto(sockfd, message, strlen(message), 0, (struct sockaddr *)&server, sizeof(server));

    len = sizeof(server);

    recvfrom(sockfd, buffer, 1024, 0, (struct sockaddr *)&server, &len);

    printf("Reply from server: %s\n", buffer);

    return 0;
}



Output
Reply from server: Hello from UDP Server

      
      `
    },
    {
      id: 4.4,
      question: "4. File Sharing using TCP",
      answer: "",
      codeExample: `
#include <stdio.h>
#include <sys/socket.h>
#include <arpa/inet.h>
#include <unistd.h>

int main()
{
    int server_fd, new_socket;
    struct sockaddr_in address;
    FILE *fp;
    char data[1024];

    server_fd = socket(AF_INET, SOCK_STREAM, 0);

    address.sin_family = AF_INET;
    address.sin_addr.s_addr = INADDR_ANY;
    address.sin_port = htons(8080);

    bind(server_fd, (struct sockaddr *)&address, sizeof(address));

    listen(server_fd, 3);

    printf("Server waiting...\n");

    new_socket = accept(server_fd, NULL, NULL);

    fp = fopen("file.txt", "r");

    while(fgets(data, sizeof(data), fp))
    {
        send(new_socket, data, sizeof(data), 0);
    }

    fclose(fp);
    close(new_socket);

    return 0;
}

Client Code
#include <stdio.h>
#include <sys/socket.h>
#include <arpa/inet.h>
#include <unistd.h>

int main()
{
    int sock;
    struct sockaddr_in serv_addr;
    char buffer[1024];
    FILE *fp;

    sock = socket(AF_INET, SOCK_STREAM, 0);

    serv_addr.sin_family = AF_INET;
    serv_addr.sin_port = htons(8080);
    serv_addr.sin_addr.s_addr = inet_addr("127.0.0.1");

    connect(sock, (struct sockaddr *)&serv_addr, sizeof(serv_addr));

    fp = fopen("received.txt", "w");

    while(read(sock, buffer, sizeof(buffer)) > 0)
    {
        fprintf(fp, "%s", buffer);
    }

    fclose(fp);

    return 0;
}



Output
Server waiting...
File transferred successfully
Client receives received.txt file.

      `
    },
    {
      id: 5.5,
      question: "5. Bit Stuffing",
      answer: "",
      codeExample: `
#include <stdio.h>

int main()
{
    int data[100], stuffed[200];
    int n, i, j = 0, count = 0;

    printf("Enter number of bits: ");
    scanf("%d", &n);

    printf("Enter bits:\n");

    for(i = 0; i < n; i++)
    scanf("%d", &data[i]);

    for(i = 0; i < n; i++)
    {
        stuffed[j] = data[i];
        j++;

        if(data[i] == 1)
        count++;
        else
        count = 0;

        if(count == 5)
        {
            stuffed[j] = 0;
            j++;
            count = 0;
        }
    }

    printf("Stuffed data:\n");

    for(i = 0; i < j; i++)
    printf("%d", stuffed[i]);

    return 0;
}



Output

Enter number of bits: 6
Enter bits:
1 1 1 1 1 0

Stuffed data:
1111100

      
      `
    },
    {
      id: 6.6,
      question: "6. Byte Stuffing",
      answer: "",
      codeExample: `
#include <stdio.h>

int main()
{
    char data[100];
    int i;

    printf("Enter the data string: ");
    scanf("%s", data);

    printf("Stuffed data:\n");

    printf("F "); // Frame start

    for(i = 0; data[i] != '\0'; i++)
    {
        if(data[i] == 'F' || data[i] == 'E')
        printf("E ");   // Escape character

        printf("%c ", data[i]);
    }

    printf(" F"); // Frame end

    return 0;
}



Output
Enter the data string: HELLO

Stuffed data:
F H E L L O F

      
      `
    },
    {
      id: 7.7,
      question: "7. Leaky Bucket Algorithm",
      answer: "",
      codeExample: `
def leaky_bucket(packets, bucket_size, output_rate):
 bucket = 0
 for i in range(len(packets)):
  print(f"\nPacket {i+1}: {packets[i]}")
  if bucket + packets[i] > bucket_size:
    print("Bucket Overflow! Packet Dropped")
  else:
    bucket += packets[i]
    print("Packet added. Bucket size:", bucket)
  bucket -= output_rate
  if bucket < 0:
    bucket = 0
  print("After transmission, bucket size:", bucket)

      
# Example
packets = [4, 2, 6, 3, 5]
leaky_bucket(packets, bucket_size=10, output_rate=3)



Sample Output

Packet 1: 4
Packet added. Bucket size: 4
After transmission, bucket size: 1
      `
    },
    {
      id: 8.8,
      question: "8. Token Bucket Algorithm",
      answer: "",
      codeExample: `
def token_bucket(packets, bucket_size, token_rate):

    tokens = bucket_size

    for i in range(len(packets)):

        tokens = min(bucket_size, tokens + token_rate)

        print(f"\nPacket {i+1}: {packets[i]}")
        print("Available tokens:", tokens)

        if tokens >= packets[i]:
            tokens -= packets[i]
            print("Packet transmitted")

        else:
            print("Packet dropped (not enough tokens)")


# Example
packets = [4, 2, 6, 3, 5]

token_bucket(packets, bucket_size=10, token_rate=3)
      `
    },
    {
      id: 9.9,
      question: "9. Longitudinal Redundancy Check (LRC)",
      answer: "",
      codeExample: `
def lrc(data):

    result = data[0]

    for i in range(1, len(data)):

        temp = ""

        for j in range(len(data[i])):

            if result[j] == data[i][j]:
                temp += '0'

            else:
                temp += '1'

        result = temp

    return result


# Example
data = ["1101", "1011", "1001"]

print("LRC:", lrc(data))
      
      `
    },
    {
      id: 10.10,
      question: "10. Cyclic Redundancy Check (CRC)",
      answer: "",
      codeExample: `
def xor(a, b):

    result = ""

    for i in range(1, len(b)):

        if a[i] == b[i]:
            result += "0"

        else:
            result += "1"

    return result


def mod2div(dividend, divisor):

    pick = len(divisor)

    tmp = dividend[0:pick]

    while pick < len(dividend):

        if tmp[0] == '1':
            tmp = xor(divisor, tmp) + dividend[pick]

        else:
            tmp = xor('0' * pick, tmp) + dividend[pick]

        pick += 1

    if tmp[0] == '1':
        tmp = xor(divisor, tmp)

    else:
        tmp = xor('0' * pick, tmp)

    return tmp


def encode(data, key):

    appended = data + '0' * (len(key) - 1)

    remainder = mod2div(appended, key)

    return data + remainder


def check(data, key):

    remainder = mod2div(data, key)

    return remainder


# Example
data = "1101"
key = "1011"

codeword = encode(data, key)

print("Transmitted:", codeword)

if check(codeword, key) == "0" * (len(key) - 1):
    print("No error")

else:
    print("Error detected")
      `
    },
    {
      id: 11.11,
      question: "11. Vertical Redundancy Check (VRC)",
      answer: "",
      codeExample: `
def vrc(data):

    count = data.count('1')

    if count % 2 == 0:
        return data + '0'

    else:
        return data + '1'


# Example
data = "1101"

print("VRC:", vrc(data))
      `
    },
    {
      id: 12.12,
      question: "12. Hamming Code",
      answer: "",
      codeExample: `
def hamming_encode(data):

    m = len(data)

    r = 0

    while (2 ** r < m + r + 1):
        r += 1

    res = ['0'] * (m + r)

    j = 0

    for i in range(1, len(res) + 1):

        if i & (i - 1) != 0:
            res[i - 1] = data[j]
            j += 1

    for i in range(r):

        pos = 2 ** i

        val = 0

        for j in range(1, len(res) + 1):

            if j & pos:
                val ^= int(res[j - 1])

        res[pos - 1] = str(val)

    return ''.join(res)


# Example
data = "1011"

print("Hamming Code:", hamming_encode(data))
      `
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },

  ];

  const toggleQuestion = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="app-container">
      <h1>Data Communication & Networking Interview Questions</h1>
      <div className="questions-container">
        {questions.map((q) => (
          <div key={q.id} className="question-item">
            <button 
              className={`question-button ${activeId === q.id ? 'active' : ''}`}
              onClick={() => toggleQuestion(q.id)}
            >
              {q.question}
            </button>
            {activeId === q.id && (
              <div className="answer-container">
                <div className="answer">
                  <h3>Answer:</h3>
                  <p>{q.answer}</p>
                </div>
                {q.codeExample && (
                  <div className="code-example">
                    <h3>Code Example:</h3>
                    <pre>
                      <code>{q.codeExample}</code>
                    </pre>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
