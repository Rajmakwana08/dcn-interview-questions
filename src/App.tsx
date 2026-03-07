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
